import tkinter as tk
from tkinter import messagebox
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes
import base64  # Para codificar/decodificar el texto cifrado

# Funciones de criptografía
def generate_rsa_keys():
    try:
        private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048
        )
        public_key = private_key.public_key()
        return private_key, public_key
    except Exception as e:
        messagebox.showerror("Error", f"Error al generar claves: {str(e)}")

def encrypt_message(public_key, message):
    try:
        ciphertext = public_key.encrypt(
            message.encode(),
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return base64.b64encode(ciphertext).decode('utf-8')  # Codificar a base64
    except Exception as e:
        messagebox.showerror("Error", f"Error al cifrar mensaje: {str(e)}")

def decrypt_message(private_key, ciphertext):
    try:
        ciphertext = base64.b64decode(ciphertext)  # Decodificar desde base64
        plaintext = private_key.decrypt(
            ciphertext,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        return plaintext.decode()
    except Exception as e:
        messagebox.showerror("Error", f"Error al descifrar mensaje: {str(e)}")

# Funciones de la interfaz
def generar_claves():
    global private_key, public_key
    private_key, public_key = generate_rsa_keys()
    messagebox.showinfo("Éxito", "Claves RSA generadas correctamente")

def cifrar_mensaje():
    if not public_key:
        messagebox.showerror("Error", "Primero genera las claves.")
        return
    message = entry_message.get()
    if not message:
        messagebox.showerror("Error", "El campo de mensaje está vacío.")
        return
    ciphertext = encrypt_message(public_key, message)
    if ciphertext:
        entry_ciphertext.delete(1.0, tk.END)
        entry_ciphertext.insert(tk.END, ciphertext)
    
def descifrar_mensaje():
    if not private_key:
        messagebox.showerror("Error", "Primero genera las claves.")
        return
    ciphertext = entry_ciphertext.get(1.0, tk.END).strip()  # Eliminar espacios en blanco
    if not ciphertext:
        messagebox.showerror("Error", "No hay texto cifrado.")
        return
    decrypted_message = decrypt_message(private_key, ciphertext)
    if decrypted_message:
        entry_decrypted.delete(1.0, tk.END)
        entry_decrypted.insert(tk.END, decrypted_message)

# Crear la ventana principal
root = tk.Tk()
root.title("Cifrado RSA")
root.geometry("500x400")

# Claves RSA
private_key = None
public_key = None

# Etiquetas y campos de entrada
tk.Label(root, text="Mensaje").pack(pady=5)
entry_message = tk.Entry(root, width=50)
entry_message.pack(pady=5)

tk.Button(root, text="Generar Claves", command=generar_claves).pack(pady=10)

tk.Button(root, text="Cifrar Mensaje", command=cifrar_mensaje).pack(pady=10)

tk.Label(root, text="Mensaje Cifrado").pack(pady=5)
entry_ciphertext = tk.Text(root, height=5, width=50)
entry_ciphertext.pack(pady=5)

tk.Button(root, text="Descifrar Mensaje", command=descifrar_mensaje).pack(pady=10)

tk.Label(root, text="Mensaje Descifrado").pack(pady=5)
entry_decrypted = tk.Text(root, height=5, width=50)
entry_decrypted.pack(pady=5)

# Ejecutar la ventana principal
root.mainloop()

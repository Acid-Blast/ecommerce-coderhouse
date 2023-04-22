import { useState } from "react"

import './ContactForm.css'

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [comments, setComments] = useState('');
    const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            lastname,
            phone,
            email,
            address,
            comments,
            date
        }

        onConfirm(userData)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit} method="GET">
            <div>
                <label  >Nombre</label>
                <input name="name" value={name} type="text"  placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div>
                <label>Apellido</label>
                <input value={lastname} type="text"  placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            
            <div>
                <label>Telefono</label>
                <input value={phone} type="number"  min={0}  placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            
            <div>
                <label>Email</label>
                <input value={email} type="email"  placeholder="Mail" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            
            <div>
                <label>Dirección de entrega</label>
                <input value={address} type="text"  placeholder="Dirección de entrega" onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            
            <div>
                <label>Comentarios</label>
                <textarea value={comments} type="text"  placeholder="Comentarios sobre el pedido" onChange={(e) => setComments(e.target.value)}></textarea>
            </div>
            
            <button type="submit">Crear orden</button>
        </form>
    )
}
export default ContactForm
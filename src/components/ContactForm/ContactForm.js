import { useState } from "react"

import './ContactForm.css'

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [comments, setComments] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,
            lastname,
            phone,
            email,
            address,
            comments
        }

        onConfirm(userData)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit} method="GET">
            <div>
                <label for="name" >Nombre</label>
                <input name="name" value={name} type="text"  placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div>
                <label for="lastname" >Apellido</label>
                <input name="lastname" value={lastname} type="text"  placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} required/>
            </div>
            
            <div>
                <label for="phone" >Telefono</label>
                <input name="phone" value={phone} type="number"  min={0}  placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            
            <div>
                <label for="email" >Email</label>
                <input name="email" value={email} type="email"  placeholder="Mail" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            
            <div>
                <label for="address" >Dirección de entrega</label>
                <input name="address" value={address} type="text"  placeholder="Dirección de entrega" onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            
            <div>
                <label for="comments" >Comentarios</label>
                <textarea name="comments" value={comments} type="text"  placeholder="Comentarios sobre el pedido" onChange={(e) => setComments(e.target.value)}></textarea>
            </div>
            
            <button type="submit">Crear orden</button>
        </form>
    )
}
export default ContactForm
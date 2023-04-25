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
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}  name="name" autoComplete="off" required/>
            </div>

            <div>
                <label>Apellido</label>
                <input value={lastname} type="text" onChange={(e) => setLastName(e.target.value)} name="lastname" autoComplete="off" required/>
            </div>
            
            <div>
                <label>Telefono</label>
                <input value={phone} type="number"  min={0}  onChange={(e) => setPhone(e.target.value)} name="tel" autoComplete="off" required/>
            </div>
            
            <div>
                <label>Email</label>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="off" required/>
            </div>
            
            <div>
                <label>Dirección de entrega</label>
                <input value={address} type="text" onChange={(e) => setAddress(e.target.value)} name="address" autoComplete="off" required/>
            </div>
            
            <div>
                <label>Comentarios</label>
                <textarea value={comments} type="text" onChange={(e) => setComments(e.target.value)}></textarea>
            </div>
            
            <button type="submit">Crear orden</button>
        </form>
    )
}
export default ContactForm
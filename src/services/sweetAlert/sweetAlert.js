import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const sweetAlert = ( title, message, icon) => {
    const Modal = withReactContent(Swal)
  
    Modal.fire({
        title: <p>{title}</p>,
        html: <i>{message}</i>,
        icon: icon,
        width: 'fit-content'
    })
            
    
    
} 
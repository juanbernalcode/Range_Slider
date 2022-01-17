import styled from 'styled-components';
import Swal from 'sweetalert2';

const Buy = styled.button`
    font-family: 'Source Sans Pro', sans-serif;
    border: none;
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 20px 40px;
    background: #333139;
    border-radius: 100px;
    letter-spacing: 1px;
    cursor: pointer;
    :hover {
        background: white;
        color: black;
    }
    :active {
        transform: scale(0.93);
        background: #EA346F;
    }
`;

const onClick = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado al Carrito !',
        showConfirmButton: false,
        timer: 1500
    })
}

const Button = () => {
    return (
        <Buy
            onClick={onClick}
        >
            Buy... Now
        </Buy>
    )
}

export default Button

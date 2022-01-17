import {useEffect} from 'react';
import Swal from 'sweetalert2';


import styled from 'styled-components';


// Components
import Price from './components/Price';
import InputRange from './components/InputRange';
import Button from './components/Layouts/Button';


const Card = styled.div`
    background: #262529;
    box-shadow: 0px 0px 250px #000000;
    border-radius: 20px;
    padding: 60px 80px;
    display: flex;
    flex-flow: wrap column;
    align-items: center;
`;


const App = () => {

    useEffect(() => {
        Swal.fire(
            'Hello, world !',
            'Te recomiendo usar el navegador Firefox para una mejor experiencia. Gracias...',
            'success'
          )
    });
    
    return (
        <Card>
            <Price />
            <InputRange />
            <Button />
        </Card>
    )
}

export default App;

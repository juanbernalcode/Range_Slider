import styled from 'styled-components';


const BoxPrice = styled.div`
  color: #FFC700;
  font-weight: bold;
  font-size: 6rem;
`;

const Price = () => {
    return (
        <BoxPrice>
            <sup>$</sup>
            <span className="dollars">50.00</span>
        </BoxPrice>
    )
}

export default Price;

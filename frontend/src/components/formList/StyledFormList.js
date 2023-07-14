import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    margin: 0 auto;
`

export const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    margin-bottom: 0.2rem;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    height: 2.3rem;
`;

export const TableHeaderCell = styled.div`
    flex: 1;
    padding: 0.5rem;
`;

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 2px solid #CCC;
    margin-top: 1rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
`;

export const TableCell = styled.div`
    flex: 1;
    padding: 0.5rem;
`;

export const DeleteButton = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
`

export const TextFooter = styled.h3`
    margin: 0 auto 1rem auto;
`

export const ArrowContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
`

//estilo para una flecha que esta apuntando hacia abajo pero la transformo hacia la derecha
export const Arrow = styled.img`
    transform: rotate(270deg);
    width: 20px;
    height: 20px;
    cursor: pointer;
    
    ${
        ({ isLeft }) => isLeft && `
            transform: rotate(90deg);
        `
    }
`
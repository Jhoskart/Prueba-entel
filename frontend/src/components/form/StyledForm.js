import styled from 'styled-components'

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const LaptopImg = styled.img`
    width: 424px;
    height: 424px;
    @media (max-width: 768px) {
        width: 168px;
        height: 168px;
    }
`
export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: var(--primary-color);
    margin-bottom: 7rem;
    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
    }
`
export const Focus = styled.span `
    font-weight: 600;
`
export const Line = styled.hr`
    margin-top: -5.5rem;
    border: 0.5px solid #CCC;
    @media (max-width: 768px) {
        margin-top: -2.2rem;
    }
`
export const FormContainer = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    margin: -0.5rem auto;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        margin: 0 auto;
    }
`
export const SubtTitle = styled.h1`
    font-style: normal;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-left: 1rem;
    }
`

export const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    margin-bottom: 0.2rem;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-left: 1rem;
        font-weight: 600;
        width: 90%;
    }
`

export const SubTitle2 = styled.h2`
    font-style: normal;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 1rem;
    }
`

export const SubTitle3 = styled.h2`
    font-style: normal;
    line-height: normal;
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 1rem;
    }
`

export const FirstInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        margin-left: 1rem;
        grid-gap:1rem;
    }
`

export const InputFieldContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width};
    margin-left: ${({ marginLeft }) => marginLeft || "auto"};
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-top: 1rem;
    }
`

export const Input = styled.input`
    padding: 1rem 1.2rem 1rem;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    font-size: 1rem;
    outline-color: var(--primary-color);
    width: 100%;

    ${
        ({ isSelect, arrow }) => isSelect &&`
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: url(${arrow}) no-repeat;
            background-position: 95% 50%;
            background-size: 15px;
        ` 
    }

    ${
        ({ error }) => error &&`
            outline-color: red;
            border-color: red;
        `
    }

    @media (max-width: 768px) {
            padding: 0.5rem 0.5rem 1rem;
    }
`

export const Label = styled.span`
    position: absolute;
    left: 0;
    padding-left: 1rem;
    font-size: 1rem;
    color: var(--primary-color);
    transform: translateX(10px) translateY(-25px);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0 6px;
    background-color: #fff;

    ${
        ({ error }) => error &&`
            color: red;
        `
    }
`

export const Required = styled.span`
    color: red;
`

export const Spaced = styled.hr`
    margin-top: 1.5rem;
    border: 0.5px solid #CCC;
    @media (max-width: 768px) {
        width: 87%;
        margin: 1rem auto;
    }
`

export const SecondInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 100%;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        margin-left: 1rem;
        grid-gap:1rem;
    }
`

export const SendButton = styled.button`
    width: 130px;
    height: 40px;
    padding: 1.5 1.2rem 1.5rem;
    border: 1px solid var(--primary-color);
    border-radius: 100px;
    font-size: 1rem;
    outline-color: var(--primary-color);
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #fff;
        color: var(--primary-color);
    }
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem auto 1rem 52rem;

    ${
        ({ disabled }) => disabled &&`
            cursor: not-allowed;
        `
    }

    @media (max-width: 768px) {
        margin: 0.5rem auto 1rem 8rem;
    }
`

export const Error = styled.span`
    color: red;
    font-size: 0.75rem;
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 0.65rem;
        bottom: -1rem;
    }
`

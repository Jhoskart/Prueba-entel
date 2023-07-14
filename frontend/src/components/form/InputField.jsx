import React from 'react'
import { Input, InputFieldContainer, Label, Required, Error } from './StyledForm'
import arrow from '../../assets/flecha.svg'

const InputField = ({ type, label, name, width, marginLeft, isSelect, options, handleChange, error }) => {
    
    return (
        <InputFieldContainer width={width} marginLeft={marginLeft}>
            <Label error={error} >{label} <Required>*</Required></Label>
            {
                isSelect ? <Input as="select" name={name} autoComplete='off' isSelect={isSelect} arrow={arrow} onChange={(e) => handleChange(e)} error={error}> 
                                <option hidden >Seleccione una opción</option>
                                {
                                    options?.map((option) => {
                                        return <option key={option.id} value={option.nombre}>{option.nombre}</option>
                                    })
                                }
                            </Input>
                : <Input type={type} name={name} autoComplete='off' onChange={(e) => handleChange(e)} error={error}/>
            }
            {error && <Error>{error}</Error>}
        </InputFieldContainer>
    )
}

export default InputField

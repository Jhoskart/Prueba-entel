import React, { useState, useEffect, useRef } from 'react'
import laptop from '../../assets/laptop.svg'
import validate from '../../helpers/validate'
import InputField from './InputField'
import { 
    Focus, 
    FormContainer, 
    LayoutContainer, 
    LaptopImg,
    Line,
    Text,
    Title,
    FirstInputContainer,
    SecondInputContainer,
    SendButton,
    Spaced,
    SubtTitle,
    SubTitle2,
    SubTitle3
} from './StyledForm'


const form = () => {

    const marcasOptions = localStorage.getItem('marcas') ? JSON.parse(localStorage.getItem('marcas')) : []
    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(true)
    const [formValues, setFormValues] = useState({
        nombre: '',
        rut: '',
        patente: '',
        marca: '',
        modelo: '',
        precio: ''
    })
    const formRef = useRef(null)

    const [modelosOptions, setModelosOptions] = useState([])

    const handleInputChange = (e) => {
        e.preventDefault()
        setErrors(validate({
            ...formValues,
            [e.target.name]: e.target.value
        }))
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const cleanForm = () => {
        formRef.current.reset();
        setFormValues({
            nombre: '',
            rut: '',
            patente: '',
            marca: '',
            modelo: '',
            precio: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const registros = localStorage.getItem('registros') ? JSON.parse(localStorage.getItem('registros')) : []
        const registro = {
            id: registros.length + 1,
            "Nombre Vendedor": formValues.nombre,
            "Rut Vendedor": formValues.rut,
            "Patente Vehículo": formValues.patente,
            "Marca Vehiculo": formValues.marca,
            "Modelo Vehiculo": formValues.modelo,
            "Precio Vehiculo": formValues.precio
        }
        registros.push(registro)
        localStorage.setItem('registros', JSON.stringify(registros))
        cleanForm()
        alert('Formulario enviado con éxito')
    }
    
    useEffect(() => {
        const modelos = marcasOptions.filter((marca) => marca.nombre === formValues.marca).map((marca) => marca.modelos)
        setModelosOptions(modelos[0])
    }, [formValues.marca])

    useEffect(() => {
        if (Object.keys(errors).length === 0
            && formValues.nombre !== ''
            && formValues.rut !== ''
            && formValues.patente !== ''
            && formValues.marca !== ''
            && formValues.modelo !== ''
            && formValues.precio !== ''
            ) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [errors])

    return (
        <>
            <LayoutContainer>
                <Title>Formulario <Focus>de Prueba</Focus></Title>
                <LaptopImg src={laptop} alt="laptop" />
            </LayoutContainer>
            <Line />
            <FormContainer>
                <SubtTitle>Nuevo Formulario</SubtTitle>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the bed industry's standard dummy text ever since.
                </Text>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <SubTitle2>Datos del vendedor:</SubTitle2>
                    <FirstInputContainer>
                        <InputField 
                            width="150%" 
                            label={"Nombre completo"} 
                            name={"nombre"} 
                            type={"text"} 
                            handleChange={handleInputChange}
                            error={errors.nombre}
                        />
                        <InputField 
                            marginLeft="auto" 
                            width="50%" label={"Rut Vendedor"} 
                            name={"rut"} type={"text"} 
                            handleChange={handleInputChange}
                            error={errors.rut}
                        />
                    </FirstInputContainer>
                    <Spaced />
                    <SubTitle3>Datos del vehículo:</SubTitle3>
                    <SecondInputContainer>
                        <InputField 
                            width="100%" 
                            label={"Patente del vehículo"} 
                            name={"patente"} type={"text"} 
                            handleChange={handleInputChange}
                            error={errors.patente}
                        />
                        <InputField 
                            width="100%" 
                            label={"Marca del vehículo"} 
                            name={"marca"} isSelect options={marcasOptions} 
                            handleChange={handleInputChange}
                        />
                        <InputField 
                            width="100%" 
                            label={"Modelo del vehículo"} 
                            name={"modelo"} isSelect options={modelosOptions} 
                            handleChange={handleInputChange}
                        />
                        <InputField 
                            width="100%" 
                            label={"Precio del vehículo"} 
                            name={"precio"} type={"number"} 
                            handleChange={handleInputChange}
                        />
                    </SecondInputContainer>
                    <Spaced />
                    <SendButton type="submit" disabled={disabled} >Enviar</SendButton>
                </form>
            </FormContainer>
        </>
    )
}

export default form

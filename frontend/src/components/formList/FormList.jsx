import React, { useEffect, useState } from 'react'
import { Container, Text, DeleteButton, TextFooter, Arrow, ArrowContainer } from './StyledFormList'
import Eliminar from '../../assets/eliminar.svg'
import arrow from '../../assets/flecha.svg'
import Table from './Table'

const FormList = () => {

    const [registros, setRegistros] = useState([])
    
    //Paginado para que enseñe 10 registros por página
    const [currentPage, setCurrentPage] = useState(1)
    const [registrosPerPage] = useState(10)
    const indexOfLastRegistro = currentPage * registrosPerPage
    const indexOfFirstRegistro = indexOfLastRegistro - registrosPerPage
    const registrosToShow = registros.slice(indexOfFirstRegistro, indexOfLastRegistro)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    useEffect(() => {
        setRegistros(localStorage.getItem('registros') ? JSON.parse(localStorage.getItem('registros')) : [])
    }, [])

    const eliminarRegistro = (id) => {
        const registros = JSON.parse(localStorage.getItem('registros'))
        const nuevosRegistros = registros.filter(registro => registro.id !== id)
        localStorage.setItem('registros', JSON.stringify(nuevosRegistros))
        setRegistros(nuevosRegistros)
    }

    return (
        <Container>
            <h1>Lista formulario</h1>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the bed industry's standard dummy text ever since.
            </Text>
            <Table headers={
                [
                    'Nombre',
                    'Rut vendedor',
                    'Patente vehículo',
                    'Marca vehículo',
                    'Modelo vehículo',
                    'Precio vehículo',
                    'Eliminar'
                ]
            } rows={
                registrosToShow?.map((registro, index) => (
                    [
                        registro['Nombre Vendedor'],
                        registro['Rut Vendedor'],
                        registro['Patente Vehículo'],
                        registro['Marca Vehiculo'],
                        registro['Modelo Vehiculo'],
                        registro['Precio Vehiculo'],
                        <DeleteButton key={index} onClick={() => {
                            eliminarRegistro(registro.id)
                        }}
                        >
                            <img src={Eliminar} alt="Eliminar" />
                        </DeleteButton>
                    ]
                ))
            }/>
            <ArrowContainer>
                <Arrow src={arrow} alt="flecha" onClick={() => paginate(currentPage === 1 ? currentPage : currentPage - 1)} isLeft/>
                <Arrow src={arrow} alt="flecha" onClick={() => paginate(currentPage + 1)} />
            </ArrowContainer>
            <TextFooter>Mostrando registros del 1 al 10 de un total de {registros.length}</TextFooter>
            
            
        </Container>
    )
}

export default FormList

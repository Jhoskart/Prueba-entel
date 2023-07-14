function validate(data) {
    
    const validateName = (name) => {
        const regex = new RegExp(/^[a-zA-Z\s]{10,30}$/);
        return !regex.test(name);
    }
    
    const validateChileanRut = (rut) => {
        const regex = new RegExp(/^(\d{1,2}\.\d{3}\.\d{3}|\d{1,2}\.\d{3}\.\d{3}-[\dkK])$/);
        return !regex.test(rut)
    }

    const validateChileanVehiclePlate = (plate) => {
        const regex = new RegExp(/^[a-zA-Z]{4}\d{2}$/);
        return !regex.test(plate);
    }

    let errors = {};
    if (data.nombre && validateName(data.nombre)) errors.nombre = "Minimo 10 caracteres, sin simbolos ni numeros";
    if (data.rut && validateChileanRut(data.rut)) errors.rut = "El rut es requerido y debe ser valido";
    if (data.patente && validateChileanVehiclePlate(data.patente)) errors.patente = "La patente es requerida y debe ser valida";

    return errors;
}

export default validate;
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clienteSchema= new Schema({
    identificacion: {type: String, required: [true, 'identificación obligatoria']},
    nombres: {type: String, required: [true, 'nombre obligatorio']},
    apellidos: {type: String, required: [true, 'apellidos obligatorio']},
    fecha_nacimiento: Date, 
    correo: {type: String, default: 'Correo obligatorio'},
    edad: Number,
    direccion: {type: String, required: [true, 'direccion obligatoria']},
    terminos: {type: String, required: [true, 'terminos obligatorios']},
});

//Convertir a modelo

const Cliente=mongoose.model('Cliente', clienteSchema);
export default Cliente;
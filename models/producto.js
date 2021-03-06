import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema= new Schema({
    codigoBarras: {type: String, required: [true, 'codigo de Barras obligatorio']},
    nombre: {type: String, required: [true, 'nombre obligatorio']},
    precio: {type: Number, required: [true, 'precio requerido']},
    imagen: String, 
    descripcion: {type: String, default: 'Lorem'},
    
});

//Convertir a modelo

const Producto=mongoose.model('Producto', productoSchema);
export default Producto;
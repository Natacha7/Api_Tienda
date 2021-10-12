import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clienteSchema = new Schema(
    {
        identificacion: {type: String, required: [true, 'Identificación obligatoria']},
        nombres: {type: String, required: [true, 'Nombre obligatorio']},
        apellidos: {type: String, required: [true, 'Apellido obligatorio']},
        fecha_nacimiento: Date,
        correo: {type: String, required: [true, 'Correo obligatorio']},
        edad: Number,
        direccion: {type: String, required: [true, 'Dirección obligatoria']},
        terminos: {type: String, required: [true, 'tratamiento de datos obligatorio']}
    }
);

// Convertir a modelo
const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
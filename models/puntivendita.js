const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  create pv Schema & model
const PuntoVenditaSchema = new Schema({
    codice_pv: {
        type: String,
        required: [true, 'codice_pv field is required']
    },
    indirizzo:{
        type: String,
        required: false
    },
    citta:{
        type: String,
        required: false
    },
    software:{
        type: String,
        required: false
    },
    hardware:{
        type: String,
        required: false
    },
    ip:{
        type: Number,
        required: false
    }
});

const PuntoVendita = mongoose.model('pv', PuntoVenditaSchema);

module.exports = PuntoVendita;
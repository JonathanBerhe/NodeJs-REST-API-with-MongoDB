const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  create pv Schema & model
const PuntoVenditaSchema = new Schema({
    codPv: {
        type: String,
        required: [true, 'codice_pv field is required']
    },
    address:{
        type: String,
        required: false
    },
    city:{
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
        type: String,
        required: false
    }
});

const MongoCollection = mongoose.connection.useDb('pv');
const PuntoVendita = MongoCollection.model('pv', PuntoVenditaSchema);

module.exports = PuntoVendita;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  create pv Schema & model
const MaschineSchema = new Schema({
    maschine: {
        type: String,
        required: [true, 'maschine field is required']
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

const MongoCollection = mongoose.connection.useDb('maschines');
const Maschine = MongoCollection.model('maschine', MaschineSchema);

module.exports = Maschine;
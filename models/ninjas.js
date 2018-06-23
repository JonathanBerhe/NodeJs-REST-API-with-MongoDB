const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    rank:{
        type: String        
    },
    availble:{
        type: Boolean,
        default: false
    }
});

const MongoCollection = mongoose.connection.useDb('ninjago');
const Ninja = MongoCollection.model('ninja', NinjaSchema);

module.exports = Ninja;         
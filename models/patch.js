const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",  
    day: "numeric" 
};

// create patch Schema & model
const PatchSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    description:{
        type: String,
        required: [true, 'Description field is required']
    },
    path:{
        type: String,
        required: [true, 'Path field is required']
    },
    reboot:{
        type: Boolean,
        default: false
    },
    created:{
        type: Date,
        default: new Date(Date.now()).toLocaleString('it-IT', { timeZone: 'UTC'}),
        required: false
    }
});

const Patch = mongoose.model('patch', PatchSchema);

module.exports = Patch;
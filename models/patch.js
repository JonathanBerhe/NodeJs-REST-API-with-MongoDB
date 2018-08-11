const mongoose = require('mongoose');

const Schema = mongoose.Schema;


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
    version:{
        type: String,
        required: [true, 'Version is required']
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
        default: new Date(Date.now()).toLocaleString('it-IT'),
        required: false
    }
});

const MongoCollection = mongoose.connection.useDb('patch');
const Patch = MongoCollection.model('patch', PatchSchema);

module.exports = Patch;
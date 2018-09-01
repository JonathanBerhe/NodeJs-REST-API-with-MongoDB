const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// create Package Schema & model
const PackageSchema = new Schema({
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

const MongoCollection = mongoose.connection.useDb('packages');
const Package = MongoCollection.model('package', PackageSchema);

module.exports = Package;
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    components: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Component'
    }]
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Category', categorySchema);

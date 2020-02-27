const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please Enter Transaction Name']
    },
    amount: {
        type: Number,
        required: [true, 'Please Enter Ammount of Transaction']
    },
    createdAt: {
        type: Date,
        defualt: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)
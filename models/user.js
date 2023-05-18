const mongoose = require('mongoose');
const userschema =mongoose.Schema({
    name: {
        type: String,
        required: [true , "Name is required"]
    },
    email: {
        type :String,
        required: [true,"Email is required"]
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    }
},
{
    timeStamps:true,
});
module.exports = mongoose.model("user",userschema);

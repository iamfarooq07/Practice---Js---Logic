import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/basic").then(
    console.log("DB Connected")
).catch(() => {
    console.log("Error");

})

const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ['Male', 'female']
    },
    contact: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
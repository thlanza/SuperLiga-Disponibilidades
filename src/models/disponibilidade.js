import mongoose from "mongoose";


const disponibilideSchema = new mongoose.Schema({
    nomeArena: {
        type: String,
        required: true,
        unique: true
    },
    formato: {
        type: String,
        required: true,
        enum: ['artisan', 'true-art', 'standard']
    }
}, {
    toJSON: { virtuals: true },
    timestamps: true
});

const Disponibilidade = mongoose.models.disponibilidade || mongoose.model("disponibilidade", disponibilideSchema);

export default Disponibilidade;
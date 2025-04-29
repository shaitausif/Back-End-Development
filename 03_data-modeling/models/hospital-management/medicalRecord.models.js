import mongoose from 'mongoose'

const medicalRecodSchema = new mongoose.Schema( {} , {timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord',medicalRecodSchema)
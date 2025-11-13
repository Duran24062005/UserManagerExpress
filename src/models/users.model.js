import mongoose from "mongoose";
import { Schema } from "mongoose";


const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    created_at: Date
});

export const User = mongoose.model('User', UserSchema);
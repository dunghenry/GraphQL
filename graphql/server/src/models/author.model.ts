import { Schema, model } from "mongoose";
import { IAuthor } from "../types";
const authorSchema = new Schema<IAuthor>({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});
const Author = model<IAuthor>('Author', authorSchema);
export default Author;
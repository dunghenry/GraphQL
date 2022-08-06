import  mongoose  from 'mongoose';
export type IPort = string | number;
export interface IAuthor{
    name: string;
    age: number;
}
export interface IBook{
    authorId: mongoose.Schema.Types.ObjectId;
    title: string;
    genre: string;
}
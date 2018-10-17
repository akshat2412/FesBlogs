import { IAuthor } from './Author.model';

export interface IComment {
    id: Number;
    createdAt: Date;
    updatedAt: Date;
    body: String;
    author: IAuthor;
}

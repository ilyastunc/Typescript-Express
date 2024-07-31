//controllerları buraya import ediyoruz.

import {Express, Request, Response, NextFunction} from 'express'
import getBookHandler from './books/books.controller'

function routes(app: Express) {
    app.get("/api/book/:bookId/:authorId", getBookHandler);
}

export default routes;
//services'teki servisler buraya import edilir.

import {Express, Request, Response, NextFunction} from 'express'

function getBookHandler(req: Request, res: Response, next:NextFunction) {
    console.log(res.locals.name)
    return res.send(res.locals.name)
};

export default getBookHandler;
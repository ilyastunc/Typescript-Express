import express, {NextFunction, Request, Response} from 'express'
import { ResolutionMode } from 'typescript'
import routes from './routes'
import helmet from 'helmet'

const app = express()

app.use(express.json())

app.use(helmet());

// app.get("/", (req: Request, res: Response) => {
//     return res.send("Hello world")
// })

// app.post("/api/data", (req: Request, res: Response) => {
//     console.log(req.body)
//     return res.sendStatus(200)
// })

// app.route("/api/book")
// .get((req: Request, res: Response) => {
//     return res.send("You make a GET request")
// }).post((req: Request, res: Response) => {
//     return res.send("You make a POST request")
// }).all((req: Request, res: Response) => { //all ile GET,POST,PUT,PATCH,DELETE türlerinin hepsinde istek yapılabiliniyor.
//     return res.send("You make a X request")
// })

//------------------------------
// function handleGetBook(req: Request, res: Response, nex: NextFunction) {
//     console.log(req.params)
//     return res.send(req.params)
// }

// const handleGetBook = (req: Request, res: Response, nex: NextFunction)  => {
//     console.log(req.params)
//     return res.send(req.params)
// }

// app.get("/api/book/:bookId/:authorId", handleGetBook);

//------------------------------
// const handleGetBookOne = (req: Request, res: Response, next: NextFunction)  => {
//     console.log(req.params)
//     next()
// }

// const handleGetBookTwo = (req: Request, res: Response, next: NextFunction)  => {
//     console.log("second handler")
//     return res.send(req.params)
// }

// app.get("/api/book/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

//------------------------------ middleware tanımlayıp herhangi bir methodda kullanmak
// const middleware = (req: Request, res: Response, next: NextFunction)  => {
//     // @ts-ignore
//     req.name = "Tom"
//     next()
// }


// app.get("/api/book/:bookId/:authorId", 
//     middleware,
//     function(req: Request, res: Response, next:NextFunction) {
//         // @ts-ignore
//         console.log(req.name)
//         // @ts-ignore
//         return res.send(req.name)
//     });

//------------------------------ middleware'ı global tanımlayıp tüm isteklerde kullanmak
// const middleware = (req: Request, res: Response, next: NextFunction)  => {
//     console.log("Middleware'in içinde")
//     // @ts-ignore
//     req.name = "Tom"
//     next()
// }

// app.use(middleware)

// app.get("/api/book/:bookId/:authorId", 
//     function(req: Request, res: Response, next:NextFunction) {
//         console.log("2. fonksiyonun içinde")
//         // @ts-ignore
//         console.log(req.name)
//         // @ts-ignore
//         return res.send(req.name)
//     });

//------------------------------ middleware'e parametre göndererek tüm isteklerde kullanmak
// const middleware = ({name}: {name: string}) => (req: Request, res: Response, next: NextFunction)  => {
//     console.log("Middleware'in içinde")
//     // @ts-ignore
//     req.name = name
//     next()
// }

// app.use(middleware({name:"TomDoesTech"}))

// app.get("/api/book/:bookId/:authorId", 
//     function(req: Request, res: Response, next:NextFunction) {
//         console.log("2. fonksiyonun içinde")
//         // @ts-ignore
//         console.log(req.name)
//         // @ts-ignore
//         return res.send(req.name)
//     });

//------------------------------ req ve res'leri generic yapmak, ts-ignore'lardan kurtulmak
const middleware = ({name}: {name: string}) => (req: Request, res: Response, next: NextFunction)  => {
    console.log("Middleware'in içinde")
    res.locals.name = name
    next()
}

app.use(middleware({name:"TomDoesTech"}))

// app.get("/api/book/:bookId/:authorId", 
//     function(req: Request, res: Response, next:NextFunction) {
//         console.log("2. fonksiyonun içinde")
//         console.log(res.locals.name)
//         return res.send(res.locals.name)
//     });

//------------------- error handling

// const throwsError = async () => {
//     throw new Error("Boom");
// } 

// app.get('/error', async (req, res) => {
//     try {
//         await throwsError();
//         res.sendStatus(200);
//     } catch (e) {
//         res.status(400).send("error: " + e)
//     }
// })

routes(app);

app.listen(3001, () => {
    console.log("Application listening at 3001")
})
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { AppError } from "./Errors/AppError";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'Error',
      message: err.message
    })
  }
  
  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error - ' + err.message 
  })
})

app.listen(8080, () => console.log('server on http://localhost:8080'));
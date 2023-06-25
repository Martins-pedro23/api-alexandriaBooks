import {Router} from 'express';
import bookController from '../controllers/book/BookController';

const routes = Router();

routes.get('/books', bookController.findAll);
routes.post('/books', bookController.create);

export default routes;
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server ABC');
});

app.get('/api', (req: Request, res: Response) => {
	res.send('My Api');
});

app.get('/:id', (req: Request, res: Response) => {
	res.send('For id: ' + req.params.id);
});


app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
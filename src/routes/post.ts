import { Router, Request, Response, NextFunction } from 'express';
import Post from '../models/post';

const router = Router();

// Get All
router.get('/', async(req: Request, res: Response) => {
	const posts = await Post.find();
	res.status(200).json(posts);
});

// Get One
router.get('/:id', getPost, (req: Request, res: Response) => {
	res.send(res.post);
});

// Create a post
router.post('/', async(req: Request, res: Response) => {
	const post = new Post({
		title: req.body.title,
		body: req.body.body
	});
	try {
		const newPost = await post.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

// Update a post
router.patch('/:id', getPost, async(req: Request, res: Response) => {
	if (res.post.title != null) {
		res.post.title = req.body.title;
	}
	if (res.post.body != null) {
		res.post.body = req.body.body;
	}
	try {
		const updatePost = await res.post.save();
		res.json(updatePost);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

// Delete a post
router.delete('/:id', getPost, async(req: Request, res: Response) => {
	try {
		await res.post.remove();
		res.json({ message: 'Delete Post' });
	} catch (err) {
		res.status(500).json({ message: err })
	}
});

// Use post's id to get data in database
async function getPost(req: Request, res: Response, next: NextFunction) {
	let post;
	try {
		post = await Post.findById(req.params.id);
		if (post == null) {
			return res.status(404).json({ message: "Cannot find post"});
		}
	} catch(err) {
		res.status(500).json({ message: err })
	}
	res.post = post
	next();
}

export default router;
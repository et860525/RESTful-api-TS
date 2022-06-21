"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = __importDefault(require("../models/post"));
const router = (0, express_1.Router)();
// Get All
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_1.default.find();
    res.status(200).json(posts);
}));
// Get One
router.get('/:id', getPost, (req, res) => {
    res.send(res.post);
});
// Create a post
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new post_1.default({
        title: req.body.title,
        body: req.body.body
    });
    try {
        const newPost = yield post.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}));
// Update a post
router.patch('/:id', getPost, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.post.title != null) {
        res.post.title = req.body.title;
    }
    if (res.post.body != null) {
        res.post.body = req.body.body;
    }
    try {
        const updatePost = yield res.post.save();
        res.json(updatePost);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}));
// Delete a post
router.delete('/:id', getPost, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.post.remove();
        res.json({ message: 'Delete Post' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
// Use post's id to get data in database
function getPost(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let post;
        try {
            post = yield post_1.default.findById(req.params.id);
            if (post == null) {
                return res.status(404).json({ message: "Cannot find post" });
            }
        }
        catch (err) {
            res.status(500).json({ message: err });
        }
        res.post = post;
        next();
    });
}
exports.default = router;

import mongoose, { Schema } from "mongoose";

interface IPost {
	title: string;
	body: string;
	Date: Date;
}

const PostSchema = new Schema<IPost>({
	title: { type: String, trim:true, required: true},
	body: { type: String, trim:true, required: true},
	Date: { type: Date, default: Date.now}
});

const Post = mongoose.model<IPost>('Post', PostSchema);
export default Post;
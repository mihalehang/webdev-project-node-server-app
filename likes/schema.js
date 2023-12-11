import mongoose from 'mongoose';
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        userName: String,
        movieId: String,
        movieTitle: String,
        poster: String,
    },
    { collection: 'likes' }
);
export default schema;

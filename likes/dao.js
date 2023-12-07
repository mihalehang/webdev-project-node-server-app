import model from './model.js';

export const findAllLikes = () => model.find();
export const createUserLikesMovie = (userId, userName, movieId, movieTitle) => model.create({ user: userId, userName: userName, movieId: movieId, movieTitle: movieTitle});
export const findMoviessUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeMovie = (movieId) => model.find({ movieId: movieId });
export const deleteUserLikesMovie = (userId, movieId) => 
    model.deleteOne({user: userId, movieId: movieId});
export const findUsersRecentLike = (userId) => model.find({ user: userId}).sort({_id: -1}).limit(1);
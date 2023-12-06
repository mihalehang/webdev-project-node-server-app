import model from './model.js';

export const findAllLikes = () => model.find();
export const createUserLikesMovie = (userId, movieId) => model.create({ user: userId, movieId: movieId });
export const findMoviessUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeMovie = (movieId) => model.find({ movieId: movieId });

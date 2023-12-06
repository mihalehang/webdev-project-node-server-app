import model from './model.js';

export const findAllLikes = () => model.find();
export const createUserLikesMovie = (userId, movieId, movieTitle) => model.create({ user: userId, movieId: movieId, movieTitle: movieTitle});
export const findMoviessUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeMovie = (movieId) => model.find({ movieId: movieId });

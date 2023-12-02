import model from './model.js';

export const findAllLikes = () => model.find();
export const createUserLikesMovie = (userId, albumId) => model.create({ user: userId, albumId: albumId });
export const findMoviessUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeMovie = (albumId) => model.find({ albumId: albumId });

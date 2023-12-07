import * as dao from './dao.js';

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {
        console.log('findAllLikes');
        const likes = await dao.findAllLikes();
        res.send(likes);
    };
    const createUserLikesMovie = async (req, res) => {
        const { userId, userName, movieId, movieTitle } = req.params;
        const like = await dao.createUserLikesMovie(userId, userName, movieId, movieTitle);
        res.send(like);
    };
    const findMoviessUserLikes = async (req, res) => {
        const { userId } = req.params;
        const likes = await dao.findMoviessUserLikes(userId);
        res.send(likes);
    };
    const findUsersWhoLikeMovie = async (req, res) => {
        const { movieId } = req.params;
        const likes = await dao.findUsersWhoLikeMovie(movieId);
        res.send(likes);
    };

    const deleteUserLikesMovie = async (req, res) => {
        const { userId, movieId } = req.params;
        const status = await dao.deleteUserLikesMovie(userId, movieId);
        res.send(status);
    }

    const findUsersRecentLike = async (req, res) => {
        const { userId } = req.params;
        const like = await dao.findUsersRecentLike(userId);
        res.send(like);
    }

    app.get('/api/likes', findAllLikes);
    app.post('/api/users/:userId/:userName/likes/:movieId/:movieTitle', createUserLikesMovie);
    app.get('/api/users/:userId/likes', findMoviessUserLikes);
    app.get('/api/movies/:movieId/likes', findUsersWhoLikeMovie);
    app.delete('/api/users/:userId/likes/:movieId', deleteUserLikesMovie);
    app.get('/api/users/:userId/likes/recent', findUsersRecentLike);

}   

export default LikesRoutes;

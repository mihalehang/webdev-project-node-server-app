import * as dao from './dao.js';

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {
        console.log('findAllLikes');
        const likes = await dao.findAllLikes();
        res.send(likes);
    };
    const createUserLikesMovie = async (req, res) => {
        const { userId, movieId, movieTitle } = req.params;
        const like = await dao.createUserLikesMovie(userId, movieId, movieTitle);
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

    app.get('/api/likes', findAllLikes);
    app.post('/api/users/:userId/likes/:movieId/:movieTitle', createUserLikesMovie);
    app.get('/api/users/:userId/likes', findMoviessUserLikes);
    app.get('/api/movies/:movieId/likes', findUsersWhoLikeMovie);
}

export default LikesRoutes;

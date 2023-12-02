import * as dao from './dao.js';

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {
        console.log('findAllLikes');
        const likes = await dao.findAllLikes();
        res.send(likes);
    };
    const createUserLikesMovie = async (req, res) => {
        const { userId, albumId } = req.params;
        const like = await dao.createUserLikesMovie(userId, albumId);
        res.send(like);
    };
    const findMoviessUserLikes = async (req, res) => {
        const { userId } = req.params;
        const likes = await dao.findMoviessUserLikes(userId);
        res.send(likes);
    };
    const findUsersWhoLikeMovie = async (req, res) => {
        const { albumId } = req.params;
        const likes = await dao.findUsersWhoLikeMovie(albumId);
        res.send(likes);
    };

    app.get('/api/likes', findAllLikes);
    app.post('/api/users/:userId/likes/:albumId', createUserLikesMovie);
    app.get('/api/users/:userId/likes', findMoviessUserLikes);
    app.get('/api/albums/:albumId/likes', findUsersWhoLikeMovie);
}

export default LikesRoutes;

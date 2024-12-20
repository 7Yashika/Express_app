// user_app/routes/user_routes.js
const express = require('express');
const userController = require('../controllers/user_controller');

const router = express.Router();

// User routes
router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:username', userController.getUser.bind(userController));
router.post('/users', userController.createUser.bind(userController));
router.post('/users/login', userController.loginUser.bind(userController));

// Follow/Unfollow routes
router.post('/users/:followedId/follow', userController.followUser.bind(userController));
router.delete('/users/:followedId/unfollow', userController.unfollowUser.bind(userController));
router.get('/users/:userId/followers', userController.getFollowers.bind(userController));
router.get('/users/:userId/following', userController.getFollowing.bind(userController));
router.get('/users/:userId/follower_count', userController.getfollower_count);

module.exports = router;

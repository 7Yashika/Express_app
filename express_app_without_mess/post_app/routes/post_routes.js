const express = require('express');
const postController = require('../controllers/post_controller');

const router = express.Router();

router.get('/posts', postController.getAllPosts.bind(postController));
router.get('/posts/:post_id', postController.getPost.bind(postController));
router.post('/posts', postController.createPost.bind(postController));
router.put('/posts/:post_id', postController.updatePost.bind(postController));
router.delete('/posts/:post_id', postController.deletePost.bind(postController));
router.get('/posts/explore/:userId', postController.getExplorePosts.bind(postController));
router.get('/posts/public', postController.getPublicPosts.bind(postController)); 
router.get('/posts/private/:userId', postController.getPrivatePosts.bind(postController));

module.exports = router;

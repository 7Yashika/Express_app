const postService = require('../services/post_service');

class PostController {
  async getAllPosts(req, res) {
    try {
      const posts = await postService.getAllPosts();
      res.status(200).json(posts);
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPost(req, res) {
    try {
      const post = await postService.getPostById(req.params.post_id);
      res.status(200).json(post);
    }
    catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async createPost(req, res) {
    try {
      const {userId} = req.body; // Assume authenticated user ID
      const { content } = req.body;
      const post = await postService.createPost(userId, content);
      res.status(201).json(post);
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updatePost(req, res) {
    try {
      const { content } = req.body;
      const post = await postService.updatePost(req.params.post_id, content);
      res.status(200).json({ message: 'Post updated successfully', post });
    }
    catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      await postService.deletePost(req.params.post_id);
      res.status(200).json({ message: 'Post deleted successfully' });
    }
    catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getExplorePosts(req, res) {
    try {
      const {userId} = req.params;
      const posts = await postService.getExplorePosts(userId);
      res.status(200).json({
        success: true,
        message: 'Explore posts fetched successfully',
        data: explorePosts,
      });
    } catch (error) {
      console.error('Error fetching explore posts:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching explore posts',
      });
    }
  }

  async getPublicPosts(req, res) {
    try {
      const publicPosts = await PostService.getPublicPosts();
      res.status(200).json({
        success: true,
        message: 'Public posts fetched successfully',
        data: publicPosts,
      });
    } catch (error) {
      console.error('Error fetching public posts:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching public posts',
      });
    }
  }

  async getPrivatePosts(req, res) {
    try {
      const privatePosts = await PostService.getPrivatePosts(req.user.id);
      res.status(200).json({
        success: true,
        message: 'Private posts fetched successfully',
        data: privatePosts,
      });
    } catch (error) {
      console.error('Error fetching private posts:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching private posts',
      });
    }
  }
}

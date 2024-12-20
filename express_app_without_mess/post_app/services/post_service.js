const Post = require('../models/post');
const Follower = require('../models/follower');
const User = require('../models/user');
const { getFollowers } = require('../../user_app/services/user_service');


class PostService {
  async getAllPosts() {
    return await Post.find().populate('user_id', 'username').sort({ created_at: -1 });
  }

  async getPostById(postId) {
    const post = await Post.findById(postId).populate('user_id', 'username');
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async createPost(userId, content) {
    const post = new Post({ user_id: userId, content });
    await post.save();
    return post;
  }

  async updatePost(postId, content) {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    post.content = content;
    post.updated_at = new Date();
    await post.save();
    return post;
  }

  async deletePost(postId) {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async getExplorePosts(userId){
    const explorePost=await Post.findAll({
      include: [
        {
          model:User,
          atrributes:[],
        },
        {
          model:Follower,
          atrributes:[],
          required:false,  // for outer join
        },
      ],
      where:{
        userId:{
          [op.notIn]:getFollowers,
          [op.ne]:userId,
        },
      },
      atrributes:{
        include: [[fn('COUNT',col('Follower.followerId')),'followerCount']],
      },
      group:['Post.postId','User.userId'],
      order:[[fn('COUNT',col(Follower.followerId)),'DESC']],
      limit:50,
    });
    return explorePost;
  }

  async getPublicPosts() {
    return await Post.findAll();
  }

  async getPrivatePosts(userId) {
    const followedUsers=await Follower.findAll({
      where:{followerId:userId},
      atrributes:['followedId'],
    });
    return PrivatePosts;
    
  }
}

module.exports = new PostService();

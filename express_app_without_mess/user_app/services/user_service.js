// user_app/services/user_service.js
const User = require('../models/user');
const Follow = require('../models/follow');

class UserService {

  async getAllUsers() {
    console.log("User Name alpha beta gamma!");
    return await User.find({});
  }

  async getUserByUsername(username) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async createUser(userData) {
    const user = new User(userData);
    await user.save();

    return user;
  }

  async loginUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordMatch = user.password === password; // Use bcrypt to modify this logic
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }

    return user;
  }

  async followUser(followerId, followedId) {
    if (followerId === followedId) {
      throw new Error('Cannot follow oneself');
    }
    const existingFollow = await Follow.findOne({ follower_id: followerId, followed_id: followedId });
    if (existingFollow) {
      throw new Error('Already following this user');
    }

    const follow = new Follow({ follower_id: followerId, followed_id: followedId });
    await follow.save();
  
    return follow;
  }

  async unfollowUser(followerId, followedId) {
    const follow = await Follow.findOneAndDelete({ follower_id: followerId, followed_id: followedId });
    if (!follow) {
      throw new Error('Not following this user');
    }

    return follow;
  }

  async getFollowers(userId) {
    const followers = await Follow.find({ followed_id: userId }).populate('follower_id', 'username full_name');

    return followers.map(f => f.follower_id);
  }

  async getFollowing(userId) {
    const following = await Follow.find({ follower_id: userId }).populate('followed_id', 'username full_name');

    return following.map(f => f.followed_id);
  }

  async getfollower_count(userId) {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }

        const user = await User.findById(userId); // Replace with your ORM/DB query logic
        if (!user) {
            return { message: 'User not found', statusCode: 404 };
        }

        return { follower_count: user.follower_count, statusCode: 200 };
    } catch (error) {
        console.error('Error fetching follower count:', error.message);
        return { message: 'Error fetching user', statusCode: 500 };
    }
}


}
module.exports = new UserService();





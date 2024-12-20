// user_app/models/follow.js
const mongoose = require('mongoose');

const FollowSchema = new mongoose.Schema({
  follower_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followed_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followed_at: { type: Date, default: Date.now },
  follower_count:{ type: Number, default: 0 }
});

// Ensure that a user can only follow another user once
FollowSchema.index({ follower_id: 1, followed_id: 1 }, { unique: true });

module.exports = mongoose.model('Follow', FollowSchema);

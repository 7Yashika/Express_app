## Instructions to setup your project
# Social Media Back-end App using Express
## Objective
Create an equivalent Express App (with the same routes and operations) as your Flask App and upload it on this repository.
* Do *NOT* upload the package-lock.json file.
* Do *NOT* upload the node_modules folder.
* You do *NOT* need to use migrations in this project.

Also, add the details to this *README.md* file as mentioned below.

## Instructions to setup your project
# Step 1: Install Node.js and npm
# Download Node.js from https://nodejs.org and install (manual step).
# After installation, verify versions:
node -v && npm -v

# Step 2: Install Visual Studio Code
# Download VS Code from https://code.visualstudio.com and install (manual step).
# Open VS Code and install the following extensions:
# - Prettier
# - ESLint
# - MongoDB (optional)

# Step 3: Install Git and set up GitHub
# Download Git from https://git-scm.com/ and install (manual step).
# Configure Git after installation:
git config --global user.name "Your GitHub Username"
git config --global user.email "Your GitHub Email"

# Step 4: Clone the Express app from GitHub
# Replace <repository-url> with the actual GitHub repository URL of your Express app
git clone <repository-url> express-app
cd express-app

# Step 5: Install dependencies
npm install

# Step 6: Set up MongoDB (if used in the project)
# Download and install MongoDB (manual step) or use MongoDB Atlas for cloud setup.
# Install MongoDB driver if not already installed
npm install mongoose

# Step 7: Set up Postman
# Download Postman from https://www.postman.com/ and install (manual step).

# Step 8: Start the Express server
# Assuming your app entry point is app.js or server.js (adjust if necessary)
node app.js

## List of Routes
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

// Post routes 
router.get('/posts', postController.getAllPosts.bind(postController));
router.get('/posts/:post_id', postController.getPost.bind(postController));
router.post('/posts', postController.createPost.bind(postController));
router.put('/posts/:post_id', postController.updatePost.bind(postController));
router.delete('/posts/:post_id', postController.deletePost.bind(postController));
router.get('/posts/explore/:userId', postController.getExplorePosts.bind(postController));
router.get('/posts/public', postController.getPublicPosts.bind(postController)); 
router.get('/posts/private/:userId', postController.getPrivatePosts.bind(postController));

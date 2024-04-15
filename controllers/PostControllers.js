const Post = require("./../models/Post");


// create post
exports.createPost = ("/", async (req, res) => {
  const { text, likes, author } = req.body;
  const post = new Post({
    text,
    likes,
    author,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// read post
exports.readPost = ('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  // Read a single post
  exports.readAllPosts = ('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Update a post
exports.updatePost = ('/:id', async (req, res) => {
    try {
      const { text, likes, author } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, { text, likes, author }, { new: true });
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(updatedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Delete a post
  exports.deletePost = ('/:id', async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
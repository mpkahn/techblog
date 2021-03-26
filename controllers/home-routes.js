const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all the posts for the homepage
router.get('/', async (req, res) => {
  try {
    const postContent = await Post.findAll({
      include: [User],
    });

    const posts = postContent.map((post) => post.get({ plain: true }));

    res.render('mainposts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post by ID
router.get('/post/:id', async (req, res) => {
  try {
    const postContent = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postContent) {
      const post = postContent.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

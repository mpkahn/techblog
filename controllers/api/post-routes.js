const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models/');


router.put('/:id', withAuth, async (req, res) => {
  try {
    const [rows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const postNew = await Post.create({ ...body, userId: req.session.userId });
    res.json(postNew);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [rows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

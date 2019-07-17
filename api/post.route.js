const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let Post = require('./post.model');

// Define store route
postRoutes.route('/add').post((req, res) => {
  let post = new Post(req.body);
  post
    .save()
    .then(() => {
      res.status(200).json({ business: 'business in added successfully' });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// Define get data(index or listing) route
postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json(err);
    } else {
      res.json(posts);
    }
  });
});

// Define edit route
postRoutes.route('/edit/:id').get((req, res) => {
  let id = req.params.id;
  Post.findById(id, (err, post) => {
    if (err) {
      res.json(err);
    }
    res.json(post);
  });
});

// Define update route
postRoutes.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (!post) res.status(400).send('data is not found');
    else {
      post.title = req.body.title;
      post.body = req.body.body;
      post
        .save()
        .then(() => {
          res.json('Update complete');
        })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Define delete | remove | destroy route
postRoutes.route('/delete/:id').delete((req, res) => {
  Post.findByIdAndRemove({ _id: req.params.id }, err => {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = postRoutes;

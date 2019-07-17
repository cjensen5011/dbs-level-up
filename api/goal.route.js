const express = require('express');
const goalRoutes = express.Router();

// require Goal model in our routes module
let Goal = require('./goal.model');

// define store route
goalRoutes.route('/add').post((req, res) => {
  let goal = Goal(req.body);
  goal
    .save()
    .then(() => {
      res.status(200).json({ goal: 'goal added successfully' });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

// define get data(index or listing) route
goalRoutes.route('/').get((req, res) => {
  Goal.find((err, goals) => {
    if (err) {
      res.json(err);
    } else {
      res.json(goals);
    }
  });
});

//define edit route
goalRoutes.route('/edit-goal/:id').get((req, res) => {
  let id = req.params.id;
  Goal.findById(id, (err, goal) => {
    if (err) {
      res.json(err);
    }
    res.json(goal);
  });
});

// define update route
goalRoutes.route('/update/:id').post((req, res) => {
  Goal.findById(req.params.id, (err, goal) => {
    if (!goal) res.status(400).send('goal is not found');
    else {
      goal.title = req.body.title;
      goal.body = req.body.body;
      goal
        .save()
        .then(() => {
          res.json('update complete');
        })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// define delete | remove | destroy route
goalRoutes.route('/delete/:id').delete((req, res) => {
  Goal.findByIdAndRemove({ _id: req.params.id }, err => {
    if (err) res.json(err);
    else res.json('successfully removed');
  });
});

module.exports = goalRoutes;

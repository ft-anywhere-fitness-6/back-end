const express = require('express');
const router = express.Router();
const Classes = require('./class-model');
const { restricted } = require('../auth/auth-middleware');

router.get('/', async (req, res, next) => {
    try {
      const classes = await Classes.findAll();
      res.status(200).json(classes);
    } catch (err) {
      next(err);
    }
  });

router.get('/:class_id', async (req, res, next) => {
    try {
      const theClass = await Classes.findById(req.params.class_id);
      res.status(200).json(theClass);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:user_id/teaching', async (req, res, next) => {
    try {
      const classes = await Classes.findTeaching(req.params.user_id);
      res.status(200).json(classes);
    } catch (err) {
      next(err);
    }
  });

  router.post('/add', (req, res, next) => {
    const {
        class_name,
        class_type,
        class_duration,
        class_intensity,
        class_location,
        start_time,
        class_date,
        class_size,
        user_id         
    } = req.body;
    Classes.add({
        class_name,
        class_type,
        class_duration,
        class_intensity,
        class_location,
        start_time,
        class_date,
        class_size,
        user_id     
    })
      .then((regClass) => {
        res.status(201).json(regClass);
      })
      .catch(next);
  });

router.get('/:user_id/attending', async (req, res, next) => {
    try {
      const classes = await Classes.findAttending(req.params.user_id);
      res.status(200).json(classes);
    } catch (err) {
      next(err);
    }
  });

  router.post('/signup', async (req, res, next) => {
    try {
      const signup = await Classes.signup(req.body);
      res.status(200).json(signup);
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:user_id', (req, res, next) => {
    Classes.removeClass(req.params.user_id)
    .then(count => {
      if (count > 0) {
        res.status(204).end()
      } else {
        res.status(404).json({ message:'Not found' })
      }
    })
    .catch(next)
  })

  router.put('/:user_id', (req, res, next) => {
    Classes.update(req.params.user_id, req.body)
      .then(classes => {
        res.status(200).json(classes);
      })
      .catch(err => {
        next(err)
      })
  })
module.exports = router;
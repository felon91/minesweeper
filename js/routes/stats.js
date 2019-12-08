const express = require('express');
const router = express.Router();
const Stats = require('../models/Statistics');

router.get('/', async (req, res) => {
  const stats = await Stats.find({});
  res.status(200).json(stats);
});

router.post('/', async (req, res) => {
  const statsData = {
    name: req.body.name,
    timeResult: req.body.timeResult,
  };
  const stat = new Stats(statsData);
  await stat.save();
  res.status(201).json(stat);
});

router.delete('/:statId', async (req, res) => {
  await Stats.remove({_id: req.params.statId});
  res.status(200).json({
    message: 'Удалено'
  })
});

module.exports = router;
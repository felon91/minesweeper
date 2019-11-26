const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/minesweeperStats',  {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('started');
    })
    .catch((e => console.log(e)));

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  timeResult: {
    type: Number,
    required: true
  }
});

const statsModel = mongoose.model('statistics', StatsSchema);

const statistics = new statsModel({
  name: 'Денис',
  timeResult: 0
});

// statsModel.find({name: 'Денис'})
//     .limit(1)
//     .then(persons => {
//       statsModel.find({id: persons._id}).deleteOne().then(() => {
//         console.log('removed');
//       });
//     }
// );

statsModel.find({}).then(persons => {
  console.log(persons);
});

// statistics.save()
//     .then(user => {
//       console.log(user);
//     })
//     .catch(e => console.log(e));
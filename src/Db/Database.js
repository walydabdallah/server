const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect("mongodb+srv://unicoursework:mNjrPhKgRk3H1fCh@cluster0.kr3qw.mongodb.net/covid?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDb successsFully Connected!!'))
        .catch(err => console.log('Errror in connecting mongodb', err));
}

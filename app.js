var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/campgrounds');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var campgroundSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
});

var camp = mongoose.model('Campground', campgroundSchema);

// camp.create({
//     title: 'bukitBerhantu',
//     image: 'Ini Gambar',
//     description: 'ini bukit super anehhh....',
// }, (err, campLog) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(campLog);
//     }
// });



//HOMEPAGE
app.get('/', (req, res) => {
    res.redirect('/campgrounds');
});

//INDEX ROUTE
app.get('/campgrounds', (req, res) => {
    camp.find({}, (err, success) => {
        if (err) {
            console.log(err);
        } else {
            res.render(index, { camp: success });
        }
    });
});


app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.post('/campgrounds', (req, res) => {
    var name = req.params.title;
    var image = req.params.image;
    var description = req.params.description;

    var newCamp = { title, image, description };


});

app.listen(5000, () => {
    console.log('server starting at port : 5000');
});
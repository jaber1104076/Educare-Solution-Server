const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/Category.json');
const courses = require('./data/Courses.json');
// console.log(categories)

app.get('/', (req, res) => {
    res.send('Educare Solution API running');
});



app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    {
        const category_course = courses.filter(n => n.category_id === id);
        res.send(category_course);
        console.log('from category', category_course);
    }

})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses)
})

app.listen(port, () => {
    console.log('Educare Solution site is running on Port', port)
})

const express = require('express');
const morgan = require('morgan');

const movieRouter = require('./movie');

const app = express();
app.use(express.static('public'))
app.use(morgan('common', { immediate: true}));
app.use(express.urlencoded({ extended: false }));
app.set('view engine','pug');

app.use('/movie', movieRouter);

app.get('/', (require,response) => {
    response.redirect('/movie');
});

app.listen(5500, () =>
    console.log('Whats Up ma Homie')
)

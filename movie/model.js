const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'Boom',
    password: 'Boomnakub1233',
    database: 'movie-db',
});

async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.promise().query(query);
    return data;
}

async function remove(id){
    const query = 'DELETE FROM Movies WHERE id = ?';
    await connection.promise().query(query, [id]);
    return;
}

async function insert(movie){
    const query = 'INSERT INTO Movies (title,year) VALUES (?,?)';
    const [result] = await connection.promise().query(query, [movie.title,movie.year,movie.id]);
    return movie;
}


async function update(movie){
    const query = 'UPDATE Movies SET title = ?, year = ? WHERE id = ?';
    await connection.promise().query(query, [movie.title,movie.year,movie.id]);
    return movie;
}

async function get(id){
    const query = 'SELECT * FROM Movie WHERE id = ?';
    await connection.promise().query(query, [id]);
    return data.pop();
}

function save(movie){
    if (!movie.id) {
        return insert(movie);
    } else {
        return update(movie);
    }
}

module.exports = {getAll,remove,get,save};
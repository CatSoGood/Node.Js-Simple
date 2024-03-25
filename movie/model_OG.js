let data = [
    {id:1, title:'Iron man', year:'2008'},
    {id:2, title:'Thor', year:'2011'},
    {id:3, title:'Melancholia', year:'2011'},
    {id:4, title:'The Shawshank Redemption', year:'1994'},
    {id:5, title:'Rain Man', year:'1988'},
    {id:6, title:'One Flew Over the Cuckoo s Nest', year:'1975'},
];

function getAll() {
    return Promise.resolve(data);
}

function remove(id){
    data = data.filter((movie) => movie.id !== id);
    return Promise.resolve();
}

module.exports = {getAll,remove};
function render(movie) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BBmovie</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <table>
        <thead><tr><th>List</th><th>Title</th></tr></thead>
        <tbody>
            ${movie
                .map((movie) => `<tr>
                <td>${movie.id}</td>
                <td>${movie.title}</td>
                <td><a href = "/movie/delete/${movie.id}">delete</a></td>
                </tr>`)
                .join('')}
        </tbody>
    </table>
</body>
</html>
`};

module.exports = render;
const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<title>Parasolki.gov</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
header {
  background-color: #FFD700;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: black;
}

/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 30%;
  height: 300px; /* only for demonstration, should be removed */
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 100%;
  background-color: #FF8C00;
  height: 100%; /* only for demonstration, should be removed */
}

/* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
}


}

/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}
</style>
</head>
<body>

<h2>Parasole.gov</h2>
<p>Sklep z parasolami.</p>
<p>Jeśli jesteś fanem wyjątkowych parasolek - dobrze trafiłeś!</p>

<header>
  <h2>Parasole.gov</h2>
</header>

  
  <article>
    <h1>Wyjątkowe parasolki</h1>
    <p>Więcej informacji pod numerem telefonu 987 654 321.</p>
    <img src=https://www.cinemahotel.pl/thumb/900x570/uploads/parasolki1.JPG>
    
  </article>
</section>


</body>
</html>`);

}

const server = http.createServer(requestListener);
server.listen(port);
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const router = require("./app/routes/routes");

// crée un port
const PORT = process.env.PORT || 3000;

// Pour utiliser la méthode Router()
app.use(router);

// Utilisation de ejs
app.set('view engine', 'ejs');
// Indiquer à express où trouver les vues
app.set('views', __dirname + '/app/views');


//Indique où trouver les fichiers statique
app.use(express.static(__dirname + '/public'));



// Fonction qui démarrera l'application lorsque le port est sollicité 
app.listen(PORT, () => { 
    console.log(`Le serveur est démarré sur le port : http://localhost:${PORT}`);
});
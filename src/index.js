const express = require ('express');
const app = express();

//midelwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//rutas
app.use(require('./routes/index'))
//Inicio del servidor
app.listen(3000);
console.log('¡BACKEND-SALUD CONECTADO EN EL PUERTO 3000!');
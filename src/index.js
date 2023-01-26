const express = require ('express');
const app = express();

//midelwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//rutas
app.use(require('./routes/index'))
//Inicio del servidor
app.listen(3000);
console.log('¡BACKEND_SALUD CONECTADO EN EL PUERTO  3000! | ingesa a la API mediante la URL=> http://localhost:3000/api/disabilities')
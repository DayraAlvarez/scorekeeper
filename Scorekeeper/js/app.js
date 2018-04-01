var scores = {}; // En este objeto se va a llevar el registro de  los jugadores y sus puntajes

/* Función CREATEPLAYER
obj: hace referencia al objeto en el que almacenaremos las keys (nombres)
name: es el nombre del jugador
*/
function createPlayer(obj, name) {
    obj[name.toLowerCase()] = 0; //Convertimos el nombre del jugador a minúsculas para estandarizar la comparación e inicializamos los puntos en cero.
    console.log(obj); //Comprobamos la data del objeto(scores)
}

/* Función ADDPOINTS
name: nombre del jugado
points: puntos a agregar
*/
function addPoints(name, points) {
    scores[name.toLowerCase()] += points; //con el += estamos actualizando los puntos del jugador
    console.log(scores); //Comprobamos que se han actualizado los puntos de la key(name) correspondiente
}

/* Función printAllPoints
retorna una cadena con los jugadores y sus puntos
*/
function printAllPoints() {
    var arrayPlayers = Object.keys(scores); //Object.keys(scores) agrega todas las keys del objeto scores al areglo arrayPlayers
    var resultados = "";
    for (var k=0; k<arrayPlayers.length; k++){ //Ciclo que itera a los jugadores y sus puntos
        if (k == arrayPlayers.length -1 ){ //Se verifica que estemos en la última posición del arreglo para quitar la coma que separa los elementos
            resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]];
        } else { // si no es la última posición se deja la coma de separacion
            resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]] + ', ';
        }
    }
    return resultados;
}

createPlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);
createPlayer(scores, "Silvana");
addPoints("silvana", 50);
console.log(printAllPoints());

// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0, 0],
};

var travelLog= [];

console.log("Tu dirección actual es " + rover.direction);
console.log("Tu posición actual es " + rover.position);

// Board

function createMatrix(columns, rows) {
  var matrix = [];
  for (var i = 0; i < columns; i++) {
    matrix[i] = new Array(rows);
  }
  return matrix;
}

var myGrid = createMatrix(10, 10);
console.log(myGrid);

// Turning 
function turnLeft() {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
  console.log(rover);
}

function turnRight() {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
  console.log(rover);
}

function turning() {
  switch (turn) {
    case "left":
      turnLeft();
      break;

    case "right":
      turnRight();
      break;
  }
  registerTravelLogTurn();
}

// MOVIMIENTO
// moveForward 

function moveForward() {
  console.log("moveForward was called")

  switch (rover.direction) {
    case "N":
      rover.position[0] = rover.position[0] - 1;
      break;

    case "E":
      rover.position[1] = rover.position[1] + 1;
      break;

    case "S":
      rover.position[0] = rover.position[1] + 1;
      break;

    case "W":
      rover.position[1] = rover.position[1] - 1;
      break;
  }

  move("forward");

  console.log(rover);
}

// moveBackward

function moveBackwards() {
  console.log("moveBackwards was called")

  switch (rover.direction) {
    case "N":
      rover.position[0] = rover.position[0] + 1;
      break;

    case "E":
      rover.position[1] = rover.position[1] - 1;
      break;

    case "S":
      rover.position[0] = rover.position[0] - 1;
      break;

    case "W":
      rover.position[1] = rover.position[1] + 1;
      break;
  }

  move("backwards");

  console.log(rover);
}

// travelLog

function move(movement) {
  if (rover.position[0] < 0 || rover.position >= 10) {
    console.log("Has llegado al borde, no te puedes mover " + movement);
    rover.position[0] = 0;
  }
  if (rover.position[1] < 0) {
    console.log("Has llegado al borde, no te puedes mover " + movement);
    rover.position[1] = 0;
  } else {
    registerTravelLogMovement();
  }
}

function registerTravelLogMovement() {
  travelLog.push("Rover avanzó, su posición es: " + rover.position);
}

function registerTravelLogTurn() {
  travelLog.push("Rover giró, su dirección es: " + rover.direction);
}

// Comandos 

function commands(command) {
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
      case "b":
        moveBackwards();
        break;

      case "f":
        moveForward();
        break;

      case "r":
        turn = "right";
        turning();
        break;

      case "l":
        turn = "left";
        turning();
        break;
    }
  }
}

// Pruebas

console.log("Comandos"); 
commands("r");
commands("l");
commands("f");
commands("b");
commands("b");
console.log("--------");

console.log("travel")
console.log(travelLog); 
console.log("--------"); 

console.log("grid");
console.log(rover);

myGrid[rover.position[0]] [rover.position[1]] = "rover";

console.log(myGrid);
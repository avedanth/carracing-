var database;
var gamestate = 0;
var playercount;
var form, game, player;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game=new Game();
    game.getState()
    game.start();
    
}

function draw(){

}

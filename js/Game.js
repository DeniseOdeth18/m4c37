class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //ANSYNC
  async start(){

    

  }

  //PLAY

  play(){
    form.hide();
    textSize(30);
    text("Inicio del Juego", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 			120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      
    }

   


  }
}

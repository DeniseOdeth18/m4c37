class Player {
  constructor(){

    //constructor
    

  }


  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update players
  update(){

  }


  //JSON
  static getPlayerInfo(){

 

  }


}


class Form {

  constructor() {
    //NOMBRE, PLAY, H2
    

  }

  // ESCONDER GREETING BUTTON INPUT
  hide(){
  

  }

  display(){
    var title = createElement('h2')
    title.html("Juego De Carreras De Autos");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      //PLAYER 
     
      
        //
      
      this.greeting.html("Hola " + player.name)
      this.greeting.position(130, 100);
    });

  }
}

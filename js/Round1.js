class Round1 {
  constructor() {

    this.hint = createElement("h3");
    this.input = createInput("").attribute("placeholder","Enter Your Answer");
    this.button = createButton("Submit");
  }

  //start() {
    //form = new Form();
    //form.display();
    //player = new Player();//}
  

  hide(){
    this.input.hide();
    this.button.hide();
  }

  play(){
    image(bg2Image,0,0,width,height);
    //console.log("play is working
    
  }
     
   
  display(){
    this.hint.html("Hint:- A Life Saver.");
    this.hint.position(150,80);
    this.input.position(150,230);
    this.button.position(290,300);
    this.input.class("customInput");
    this.button.class("customButton");
    this.hint.class("greeting");

    this.button.mousePressed(()=>{
      round2.display();

      if(Answer1 === this.input.value() ){
        score = score + 1;
        this.input.hide();
        this.button.hide();
        this.hint.hide();
        round2.display();
      }

    })
  }
}

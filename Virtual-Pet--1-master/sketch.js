//Create variables here
 var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
	//load images here

}

function setup() {createCanvas(500, 500);

  database = firebase.database();
  dog=createSprite(250,250,15,15);
  dog.addImage(dog);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);


}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }


  drawSprites();
  //add styles here
  textSize("20");
  fill("blue");
  stroke("15");
  text("Note: Press UP_ARROW KEY to feed Drago Milk",200,250);

  }

  function readStock(data){
    foodS=data.val();
   }


   function writeStock(x){

     if(x<=0){
       x=0;
    }

    else{
      x=x-1;
    }
  database.ref('/').update({
  food:x

    })
   }


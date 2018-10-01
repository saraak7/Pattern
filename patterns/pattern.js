function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(60);
//    createCanvas(windowWidth, windowHeight, WEBGL);
}

 


function draw() {
//    loopOne();
   
    //sin - cos - tan - noise  
    //PI - circles  - PI   HALF_PI  QUARTER_PI

    if (keyIsDown(LEFT_ARROW)) {
            functionOne();
        } else if(keyIsDown(RIGHT_ARROW)){
            sketchTwo();
        } else if (keyIsDown(RIGHT_ARROW)){
            sketchThree
        } else if (keyIsDown(RIGHT_ARROW)){
              
         
     
}

function functionOne(){
    
    background(36, 47, 64);
    var ang1 = tan(0.01*frameCount+20);
    var tx =  50 * sin(0.01*frameCount+40);
    var size1 = 200 * cos(0.01*frameCount+60);

    var ang2 = PI * noise(0.01*frameCount+20);
    var tx2 =  200 * noise(0.01*frameCount+20);
    var size2 = 50 * sin(0.01*frameCount+70);
    
        var tx3 = sin(0.01*frameCount+20);
    
    translate(width/2, height/2);
        for(var i = 0; i<8; i++){
            noFill();
            stroke(236,180, 46);
            push();
            rotate(ang1 + TWO_PI *i/8 );
//            translate(tx, 0);
            ellipse(100/5,100,100,50*2);
            fill(205, 40, 64);
            ellipse(tx,tx,100*3,40/3);
            pop();
                     
                for(var y = 0; y<6; y++){
                    push();
                    fill(179,239, 128);
                    noFill();
                    translate(tx3, mouseX*-1);
                    rotate(ang2 * y/4);
                    rect(200, 200, 80/2, size2); 
                        for(var t = 0; t<10; t++){
                    push();
                    noFill(179,239, 128);
                    stroke(179,239, 128);
                    translate(1, 3);
                    rotate(ang1+PI * y/2);
                    rect(0, 200/y, ang2+50, size1);
//                    fill(236,180, 46, 5);
//                    sphere(ang2/y+50);
                    pop();        
                        }
                }
            pop();          
        }    
    
    for (var i = 0; i < 100; i = i +10){
        
        rect(i, 20, 5, 40);
    }
}
    
    
    function sketchTwo(){ background(70, 123, 99);


    var ang1=sin(0.01*frameCount+10) ;


        for(var i = 0; i < 800; i = i +2){
//            fill(i*0.5,i*232,207/i, 100);
        fill(i*0.80,i*20,1*1, 100);
            ellipse(i, 0, 50, 50);
            rotate(PI*ang1/ 20);
  

    }
}
    
}   
}

function sketchThree(){
    background(198, 156, 13);
    
    var ang1=sin(0.01*frameCount+10) ;
    var tx =cos(0.01*frameCount+20)  ;
    var size1= tan(0.01*frameCount+10); 
    
    var ang1=sin(0.01*frameCount) ;
    var tx =cos(0.01*frameCount)  ;
    var size1= tan(0.01*frameCount) ; 
    
    var tx3 = sin(0.01*frameCount+20);
    
    var tx4 = 10* sin(0.01*frameCount+20);
    
    
    
       for (var i=0; i<200; i = i+5){  
            
            fill(222, 10, 114,180);
            rotateX(frameCount * 0.02);
            rotateY(frameCount * 0.01);
            translate(ang1, tx4+PI);
            torus(100+mouseY, 50);
           push();
           fill(51, 188, 206, 180)
           sphere(70);
           pop();
            translate(200, 400); 
                 translate(tx4, size1);  
           
            torus(100, 50);
                translate(200, 400); 
                 translate(tx, tx4);     
            torus(100, 50);
                rotateX(frameCount * 0.02);
                rotateY(frameCount * 0.01);
                translate(ang1+mouseX, tx4+PI);
                
                
           
                    
}
}

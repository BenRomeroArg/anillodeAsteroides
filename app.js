$(document).ready(function(){
  
    $('#izquierda').click(function(){
          
        mover(2,getX('objeto'));
    });
    
    $('#derecha').click(function(){ 
        
        mover(45 ,getX("objeto"));
       
    });
      
    $('#arriba').click(function(){
       
        mover(getY("objeto"),-10);
    });
    $('#abajo').click(function(){
         
          mover(getY('objeto'),45);
    });
   
   
    function mover(x,y){
            $('#objeto').animate({top:""+y+"%",left:""+x+"%"},
            {duration:900
       });
    }
   
    function getX(obj){
   
        var cord_x=$('#'+obj).css('left');
            return cord_x;
   
    }
    function getY(obj){
        var cord_y=$('#'+obj).css('top');
         return cord_y;
    
    }
    
    var ast = $('.impact'); 
    var nave= $('#escudo');
    if(nave.width <= ast.width){
        agregarColision('impact');
    }
    function agregarColision(target){
            var targetA = $('.'+target).addClass('impacc');
            
            return targetA;
    }
  
    
      

});
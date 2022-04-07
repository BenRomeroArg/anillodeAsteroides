$(document).ready(function(){
  
    $('#izquierda').click(function(){
          
        mover(5,getX('objeto'));
    });
    
    $('#derecha').click(function(){ 
        
        mover(40,getX("objeto"));
       
    });
      
    $('#arriba').click(function(){
       
        mover(getY("objeto"),1);
    });
    $('#abajo').click(function(){
         
          mover(getY('objeto'),40);
    });
   
   
    function mover(x,y){
            $('#objeto').animate({top:""+y+"%",left:""+x+"%"},
            {duration:1000
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
    
});
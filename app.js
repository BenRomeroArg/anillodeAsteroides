$(document).ready(function(){
  
    $('#izquierda').click(function(){
          
        mover(5,getX('objeto trayecto'));
    });    
    
    $('#derecha').click(function(){ 
        
        mover(30,getX("objeto trayecto"));
       
    });
      
    $('#arriba').click(function(){
       
        mover(getY("objeto trayecto"),1);
    });
    $('#abajo').click(function(){
         
          mover(getY('objeto trayecto'),25);
    });
    var arma = false;
    $('#arma').click(function(){
        
        if(arma){
            drawMisil();
          
            
        }else{
            $('#mina').append('<span class="bomb"></span>');
            removerMisil();  
            
      
        };
        arma = !arma;
               
    });
    function removerMisil(){
        
        setTimeout(()=>{
            $('#mina').remove();

        },2000);
        
        

    }

    
    function drawMisil (){
        $('#trayecto').append('<span id="mina"></span>');
        
        moverX(60,getW('mina'));
       
    }
       
    function mover(x,y){
        $('#objeto').animate({top:""+y+"%",left:""+x+"%"},
            {duration:1000
        });
        $('#trayecto').animate({top:""+y+"%",left:""+x+"%"},
        {duration:1000
    });  
    }
    
    function moverX(x,y){
        $('#mina').animate({left:""+x+"%",top:""+y+"%"},{
            duration:2000
        });
    }
    function getW(min){
        var direccionMina = $('#'+min).css('left');
        return direccionMina;
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
    $(function() {       
    var x = randomNumber();
    function randomColor() {
        return `rgb(0, 255, 0)` ;
    }
    function defalt() {
        return `rgb(255, 255, 255)` ;
    }
    var score=0;
    var high=localStorage.getItem("hi");
    high = $(".hi").text(high);
    var h = parseInt($(".hi").text());
    function randomNumber(){
        var number = 1 + Math.floor(Math.random() * 16);
        return number;
    }
    var intro = setInterval(decCounter, 1000) ;
    $(".g").hide();
    var n = [];
    var r =[];
    n[0] = randomNumber();
    var second;
    var third;
    do {
        n[1] = randomNumber(); 
    } while (n[1] === n[0]);
    do { 
        n[2] = randomNumber();
    } while ( n[2] ===  n[0]||  n[2] ===  n[1]);
    
     $("#"+ n[0]).css('background-color' , 'black');
     $("#"+ n[1]).css('background-color' , 'black');
     $("#"+ n[2]).css('background-color' , 'black');

     for(let i=0;i<3;i++){
         r[i]=n[i];
     }

    function decCounter() {
        var c = parseInt($(".timer").text()) ;
        c-- ;
        $(".timer").text(c)
        if(c == 0){
            clearInterval(intro);
            $(".intro").fadeOut();
            $(".g").delay(600).show();
            $(".g").fadeOut();
            var timer = setInterval(incCounter, 1000) ;
            var bar = setInterval(increment,100); 
  
            
    function incCounter() {
        var counter = parseInt($("#counter").text()) ;
        counter-- ;
        localStorage.setItem("counter", counter);
        $("#counter").text(counter);

       
          
    
        if(counter == 0){
            clearInterval(timer);
            $("#last").append("<p class='animate'> F5 to refresh.</p>");

            for(let i=0;i<3;i++){
            $("#"+n[i]).css('background-color' , 'white');
            $(".subBar").css("width" , "0%");
            if(score > h){
                h = score;
                $(".hi").text(h);
                localStorage.setItem("hi",h);
            $.confetti.start();
            setTimeout(() => {
             $.confetti.stop();
            }, 2000)
            $(this).remove()

            }
            $("td").css("background-color","white");
            }
            $.confetti.start();
            setTimeout(() => {
            $.confetti.stop();
            }, 2000)
            $(this).remove();
        }
    }
        }

        
    
        
    
}
var random =0;
$("td").click(function() {
    var id = $(this).attr('id');
    var w = $(".subBar").width();
   
    $(".score").text(score);
    for(let i=0;i<3;i++){
        if(id == n[i]){
        var actual = w/30;
        var show = parseInt(actual);
        score+=show;
            let color = randomColor() ;
            let def = defalt();
            $("#"+n[i]).animate({backgroundColor: color}, 600);
            $("#"+n[i]).animate({backgroundColor: def}, 600).text("+"+show);
            $(".subBar").css("width" , "100%");
            random = check(n);
            id=random;
            for(let i=0;i<3;i++){
                if(id==n[i]){
                    id = randomNumber();
                }
            }
            n[i]=id;
            $("#"+ n[i]).css('background-color' , 'black');

    }
}
})



    
        




function increment(){
    $(".subBar").css("width" , "-=10%");
    
}
})

function check(n){
    let rand;
    for(let i=0;i<3;i++){
        
    }
        do { 
            rand = 1+Math.floor(Math.random() * 16);
        } while (rand === n[0] || rand === n[1] || rand === n[2]);
        return rand;
     }
    

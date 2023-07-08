var quote =[`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”` ,
            `“Be yourself; everyone else is already taken.”` ,
            `“A room without books is like a body without a soul.”` ,
            `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”` , 
            `“You only live once, but if you do it right, once is enough.”`




]

var author =[`― Albert Einstein ` ,`― Oscar Wilde` , `― Marcus Tullius Cicero` , `― Dr. Seuss` , `― Mae West`]


function randomGenerator () {
    


    return   Math.floor(Math.random()* (quote.length ));;
}
    



var current=-1 ;
var random;

function clicker()
{
     random = randomGenerator();
    
    
    while(current==random)
    {
        random=randomGenerator();
    }
    
    console.log(random);
    
    
    
     quoteText = document.querySelector('#quote').textContent = quote[random];
     authourText = document.querySelector('#author').textContent = author[random];;
    
    
   
   

     current=random
     

}





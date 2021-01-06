class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("car racing");
        title.position(400,150);

        var input = createInput('name');
        var button = createButton('play');
        var greeting= createElement('h3');

        input.position(400,150);
        button.position(400,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playercount= playercount+1;
            player.update(name);
            player.updatecount(playercount);
            
            greeting.html("hello"+name);
            greeting.position(400,250);
            
        });
       
    }
}

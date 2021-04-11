window.onload = function(){
    bManager = new BubbleManager()
}
   
class BubbleManager{
    constructor(){
        this.setupBackgroundBubbles();
        let width = screen.width < 1000 ? screen.width : 1000
        document.getElementById("bubbleWrapper").setAttribute("style","height:" + 2*width + "px");
        var app = new PIXI.Application(
            {
                width: width,
                height: 2 * width,
                transparent: true,
            }
        );
        document.querySelector("#pixiCanvas").appendChild(app.view);
    
        var bubbles = [];
        //Projects:
        bubbles.push(new Bubble("Enigma",
                                "An online \n Enigma Machine",
                                {webpage:"https://schlagerandreas.github.io/enigma/",github:"https://github.com/SchlagerAndreas/enigma"},
                                "t",
                                120,
                                Math.random() * app.screen.width,
                                1740));
        app.stage.addChild(bubbles[0])
    
        bubbles.push(new Bubble("Mazertron 3000",
                                "A webpage where you can \n generate and solve mazes.",
                                {webpage:"https://schlagerandreas.github.io/maze-generator/",github:"https://github.com/SchlagerAndreas/maze-generator"},
                                "t",
                                120,
                                Math.random() * app.screen.width,
                                1740));
        app.stage.addChild(bubbles[1])
    
        bubbles.push(new Bubble("Robots",
                                "An online mini Game. \n Play a soldier and  \n fight against waves of Robots",
                                {webpage:"https://schlagerandreas.github.io/Robot/",github:"https://github.com/SchlagerAndreas/Robot"},
                                "t",
                                120,
                                Math.random() * app.screen.width,
                                1740));
        app.stage.addChild(bubbles[2])
    
        bubbles.push(new Bubble("Rasputin",
                                "-",
                                {github:"https://github.com/SchlagerAndreas"},
                                "t",
                                120,
                                Math.random() * app.screen.width,
                                1740));
        app.stage.addChild(bubbles[3]);
    }

    setupBackgroundBubbles(){
        let bubbleWrapper = document.getElementById("bubbleWrapper");
        for(let i = 0; i < Math.round(bubbleWrapper.offsetWidth / 10); i++){
            let div = document.createElement("div");
            div.setAttribute("class","bgBubble")
            div.setAttribute("style","left:" + Math.round(Math.random() * (bubbleWrapper.offsetWidth - 20)) + "px; animation: moveUp " + ((Math.random() * 10) + 5) + "s linear infinite");
            bubbleWrapper.appendChild(div)
        }
    }
}
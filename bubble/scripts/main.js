window.onload = function(){
    bManager = new BubbleManager()
}
   
class BubbleManager{
    constructor(){
        this.setupBackgroundBubbles();
        window.onresize = () => this.setupBackgroundBubbles();

        let width = screen.width < 1000 ? screen.width : 1000
        document.getElementById("bubbleWrapper").setAttribute("style","height:" + 2*width + "px");   
        this.app = new PIXI.Application(
            {
                width: width,
                height: 2 * width,
                transparent: true,
            }
        );
        document.querySelector("#pixiCanvas").appendChild(this.app.view);
    
        this.bubbles = [];
        //Projects:
        let bubbleRadius = 120;
        this.bubbles.push(new Bubble("Enigma",
                                "An online \n Enigma Machine",
                                {webpage:"https://schlagerandreas.github.io/enigma/",github:"https://github.com/SchlagerAndreas/enigma"},
                                bubbleRadius,
                                0,
                                200,
                                50));
        this.app.stage.addChild(this.bubbles[0])
    
        this.bubbles.push(new Bubble("Mazertron 3000",
                                "A webpage where you can \n generate and solve mazes.",
                                {webpage:"https://schlagerandreas.github.io/maze-generator/",github:"https://github.com/SchlagerAndreas/maze-generator"},
                                bubbleRadius,
                                this.app.screen.width / 2 - bubbleRadius,
                                10 * bubbleRadius,
                                300));
        this.app.stage.addChild(this.bubbles[1])
    
        this.bubbles.push(new Bubble("Robots",
                                "An online mini Game. \n Play a soldier and  \n fight against waves of Robots",
                                {webpage:"https://schlagerandreas.github.io/Robot/",github:"https://github.com/SchlagerAndreas/Robot"},
                                bubbleRadius,
                                this.app.screen.width - 2 * bubbleRadius,
                                2 * bubbleRadius));
        this.app.stage.addChild(this.bubbles[2])
    
        this.bubbles.push(new Bubble("Rasputin",
                                "-",
                                {github:"https://github.com/SchlagerAndreas"},
                                bubbleRadius,
                                this.app.screen.width / 2,
                                3 * bubbleRadius));
        this.app.stage.addChild(this.bubbles[3]);
        this.app.ticker.add(()=>this.update())
    }

    setupBackgroundBubbles(){
        let bubbleWrapper = document.getElementById("bubbleWrapper");
        while(bubbleWrapper.firstChild){
            bubbleWrapper.removeChild(bubbleWrapper.firstChild); 
        }

        for(let i = 0; i < Math.round(bubbleWrapper.offsetWidth / 5); i++){
            let div = document.createElement("div");
            div.setAttribute("class","bgBubble")
            div.setAttribute("style","left:" + Math.round(Math.random() * (bubbleWrapper.offsetWidth - 20)) + "px; animation: moveUp " + ((Math.random() * 10) + 5) + "s linear infinite");
            bubbleWrapper.appendChild(div)
        }
    }

    update(){
        for(let i = 0; i < this.bubbles.length; i++){
            this.bubbles[i].update(this.app);
        }
    }
}
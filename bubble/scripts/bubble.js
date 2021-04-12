class BubbleManager{
    constructor(){
        this.bubbles = [];
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
    
        //Projects:
        let bubbleRadius = 120;
        this.bubbles.push(new Bubble("Enigma",
                                "An online \n Enigma Machine",
                                {webpage:"https://schlagerandreas.github.io/enigma/",github:"https://github.com/SchlagerAndreas/enigma"},
                                bubbleRadius,
                                0,
                                200));
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
        this.bubbles.push(new Bubble("",
                                "",
                                {},
                                bubbleRadius,
                                0,
                                500,));
        this.app.stage.addChild(this.bubbles[4])
        this.app.ticker.add(()=>this.update())
    }

    /**
     * Setsup the divs and the needed css for the background bubbles
     */
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

    /**
     * Updates all bubbles
     */
    update(){
        for(let i = 0; i < this.bubbles.length; i++){
            this.bubbles[i].update(this.app);
        }
    }
}

class Bubble extends PIXI.Container{
    constructor(title,text,link,radius,x,y){
        super();
        this.x = x;
        this.y = y;
        this.startPos = y;
        this.innerRadius = radius - 10;
        this.width = 2 * radius;
        this.height = 2 * radius;
        this.radius = radius;
        this.counter = 0;
        this.rand = Math.random() * 2;

        //Drawing of the bubble
        {
            let border = new PIXI.Graphics();
            border.beginFill(0x006994,0.8);
            border.drawCircle(this.radius,this.radius,this.radius)
            border.endFill();
            this.addChild(border);
            let bubble = new PIXI.Graphics(); 
            bubble.beginFill(0xadd8e6,0.5);
            bubble.drawCircle(this.radius,this.radius,this.innerRadius)
            bubble.endFill();
            this.addChild(bubble)
        }
        
        //Text within the bubble
        {
            let siteLength = Math.round(this.innerRadius * Math.sqrt(2));
            let textstyle = {fontFamily : 'Arial', fontSize: 200, fill : 0x010101, align : 'center'};

            let textField = new PIXI.Container;
            textField.height = textField.width = siteLength;
            textField.x = textField.y = Math.round(((Math.sqrt(2) * 2 * this.radius - 2 * this.innerRadius) / 2) / Math.sqrt(2))
        

            let bTitle = new PIXI.Text(title,textstyle);
            bTitle.anchor.set(0.5);
            bTitle.width = siteLength;
            bTitle.height = Math.round(siteLength / 2);
            bTitle.x = Math.round(siteLength / 2);
            bTitle.y = Math.round(siteLength / 2);
            textField.addChild(bTitle)

            let bText = new PIXI.Text(text,textstyle);
            bText.anchor.set(0);
            bText.width = siteLength;
            bText.height = Math.round(siteLength / 2);
            bText.x = 0;
            bText.y = 0;
            bText.visible = false;
            textField.addChild(bText)

            //Links within the bubble
            {
                if(link.github != undefined){
                    let gitLink = new PIXI.Text("@github",textstyle);
                    gitLink.anchor.set(0);
                    gitLink.width = siteLength;
                    gitLink.height = Math.round(siteLength / 4);
                    gitLink.x = 0;
                    gitLink.y = Math.round(siteLength / 2);
                    gitLink.visible = false;
                    gitLink.interactive = true;
                    gitLink.buttonMode = true;
                    gitLink.on("pointerdown",()=>{window.open(link.github, '_blank');})
                    textField.addChild(gitLink)
                }

                if(link.webpage != undefined){
                    let wpLink = new PIXI.Text("@webpage",textstyle);
                    wpLink.anchor.set(0);
                    wpLink.width = siteLength;
                    wpLink.height = Math.round(siteLength / 4);
                    wpLink.x = 0;
                    wpLink.y = Math.round(3 * siteLength / 4);
                    wpLink.visible = false;
                    wpLink.interactive = true;
                    wpLink.buttonMode = true;
                    wpLink.on("pointerdown",()=>{window.open(link.webpage, '_blank');})
                    textField.addChild(wpLink)
                }
            }
            this.addChild(textField)
        } 
        
        this.interactive = true;
        this.on("mouseover",()=>{this.reverseVisibility()})
        this.on("mouseout",()=>{this.reverseVisibility()})
    }

    /**
     * Reverses the visibility for all children within the textfield of the bubble
     */
    reverseVisibility(){
        for(let i = 0; i < this.children[2].children.length; i++){
            this.children[2].children[i].visible = !this.children[2].children[i].visible;
        }
    }

    /**
     * Moves the bubble up and siteways. Up movement is reset after hitting the top.
     * @param {PIXI.Application} app The application from PIXI
     */
    update(app){
        let tmp1 = Math.cos(this.counter / 10);
        this.x += tmp1 * this.rand;
        this.y-=2;
        if(this.x + 2 * this.radius > app.screen.width){
            this.x = app.screen.width - 2 * this.radius
        }
        if(this.x < 0){
            this.x = 0;
        }
        if(this.y + 2 * this.radius < 0){
            this.y = app.screen.height;
        }
        this.counter++;
    }
}
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
        this.title = title;
        this.counter = 0;
        this.rand = Math.random() * 2;

        let textstyle = {fontFamily : 'Arial', fontSize: 200, fill : 0x010101, align : 'center'};

        let border = new PIXI.Graphics();
        border.beginFill(0x006994,0.8);
        border.drawCircle(this.radius,this.radius,this.radius)
        border.endFill();
        this.addChild(border)

        let bubble = new PIXI.Graphics(); 
        bubble.beginFill(0xadd8e6,0.5);
        bubble.drawCircle(this.radius,this.radius,this.innerRadius)
        bubble.endFill();
        this.addChild(bubble)

        let siteLength = Math.round(this.innerRadius * Math.sqrt(2));

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

        
        this.addChild(textField)
        
        this.interactive = true;
        this.on("mouseover",()=>{this.reverseVisibility()})
        this.on("mouseout",()=>{this.reverseVisibility()})

        
    }

    reverseVisibility(){
        for(let i = 0; i < this.children[2].children.length; i++){
            this.children[2].children[i].visible = !this.children[2].children[i].visible;
        }
    }

    update(app,bubbles){
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
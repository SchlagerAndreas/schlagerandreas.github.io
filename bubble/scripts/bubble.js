class Bubble extends PIXI.Container{
    constructor(title,text,link,picture,radius,x,y){
        super();
        this.x = x;
        this.y = y;
        let outerRadius = radius + 10;
        this.width = 2 * outerRadius;
        this.height = 2 * outerRadius;
        this.radius = radius;

        let textstyle = {fontFamily : 'Arial', fontSize: 100, fill : 0x010101, align : 'center'};

        let border = new PIXI.Graphics();
        border.beginFill(0x006994,0.8);
        border.drawCircle(outerRadius,outerRadius,outerRadius)
        border.endFill();
        this.addChild(border)

        let bubble = new PIXI.Graphics(); 
        bubble.beginFill(0xadd8e6,0.5);
        bubble.drawCircle(outerRadius,outerRadius,radius)
        bubble.endFill();
        this.addChild(bubble)

        let siteLength = Math.round(radius * Math.sqrt(2));

        let textField = new PIXI.Container;
        textField.height = textField.width = siteLength;
        textField.x = textField.y = Math.round(((Math.sqrt(2) * 2 * outerRadius - 2 * radius) / 2) / Math.sqrt(2))
       

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
}
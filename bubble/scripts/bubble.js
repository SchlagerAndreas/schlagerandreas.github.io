class Bubble extends PIXI.Container{
    constructor(title,text,link,picture,radius,x,y){
        super();
        this.x = x;
        this.y = y;
        let outerRadius = radius + 10;
        this.width = 2 * outerRadius;
        this.height = 2 * outerRadius;
        this.radius = radius;

        let bg = new PIXI.Graphics();
        bg.beginFill(0xFF0000);
        bg.drawRect(0,0,2 * outerRadius,2 * outerRadius)
        bg.endFill();
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg)

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

        bubble = new PIXI.Graphics(); 
        bubble.beginFill(0xadd8e6,0.5);
        bubble.drawCircle(outerRadius,outerRadius,5)
        bubble.endFill();
        this.addChild(bubble)

        let tit = new PIXI.Text(title,{fontFamily : 'Arial', fontSize: 100, fill : 0x101010, align : 'center'});
        tit.y = Math.round(3/4 * outerRadius);
        tit.x = 10;
        tit.height = Math.round(radius / 2);
        tit.width = Math.round(2 * Math.sqrt(radius * radius - (radius * radius) / 32))
        this.addChild(tit)

        let tex = new PIXI.Text(text,{fontFamily : 'Arial', fontSize: 100, fill : 0x101010, align : 'center'})
        tex.y = Math.round(3/4 * outerRadius);
        tex.x = 10;
        tex.height = Math.round(radius / 2);
        tex.width = Math.round(2 * Math.sqrt(radius * radius - (radius * radius) / 32))
        tex.visible = false;
        this.addChild(tex)

        this.interactive = true;
        this.buttonMode = true;
        this.on("mouseover",()=>{this.children[4].visible = false;this.children[5].visible = true;})
        this.on("mouseout",()=>{this.children[4].visible = true;this.children[5].visible = false;})

        
    }
}
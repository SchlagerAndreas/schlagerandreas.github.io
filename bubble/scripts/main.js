window.onload = function(){
    var test = new Bubble("Enigma","An online \n Enigam Machine","t","t",50,0,0);
    this.app = new PIXI.Application(
        {
            width: 1200,
            height: 750,
            transparent: true,
        }
    );
    document.querySelector("#webpage").appendChild(this.app.view);
    this.app.stage.addChild(test);

    test = new Bubble("Mazetron 3000","t","t","t",50,300,300);
    this.app.stage.addChild(test);
}
window.onload = function(){
    var test = new Bubble("Enigma","An online \n Enigma Machine",{webpage:"https://schlagerandreas.github.io/enigma/",github:"https://github.com/SchlagerAndreas/enigma"},"t",100,0,0);
    this.app = new PIXI.Application(
        {
            width: 1200,
            height: 750,
            transparent: true,
        }
    );
    document.querySelector("#webpage").appendChild(this.app.view);
    this.app.stage.addChild(test);

    test = new Bubble("Mazetron 3000","A Mazegenerator \n with solver",{webpage:"https://schlagerandreas.github.io/maze-generator/",github:"https://github.com/SchlagerAndreas/maze-generator"},"t",100,300,300);
    this.app.stage.addChild(test);
}
class sideMenu{
    constructor(){
        this.activeShown = "home";
        this.isMenueOpen = false;
        this.areProjectsShown = false;
        var that = this;
        this.templELcoMenu = function(){that.openCloseMenue();}
        this.templELchangeActShown = function(site){that.changeActShown(site);}
        this.templELshPro = function(){that.hideShowProjects();}
        var tmp = document.getElementById("bars");
        if(tmp != null){
            tmp.addEventListener("click", that.templELcoMenu)
        }
        tmp = document.getElementById("closeBtn");
        if(tmp != null){
            tmp.addEventListener("click", that.templELcoMenu);
        }
        tmp = document.getElementById("home");
        if(tmp != null){
            tmp.addEventListener("click", ()=>that.templELchangeActShown("home"));
        }
        tmp = document.getElementById("aboutme");
        if(tmp != null){
            tmp.addEventListener("click", ()=>that.templELchangeActShown("aboutme"));
        }
        tmp = document.getElementById("projects");
        if(tmp != null){
            tmp.addEventListener("click", that.templELshPro);
        }
    }
    changeActShown(site){
        if(site == "home"){
            document.getElementById("homeSite").dataset.visibility = "true";
            document.getElementById("aboutmeSite").dataset.visibility = "false";
            this.activeShown = "home";
        }
        else if(site == "aboutme"){
            document.getElementById("homeSite").dataset.visibility = "false";
            document.getElementById("aboutmeSite").dataset.visibility = "true";
            this.activeShown = "aboutme";
        }
    }
    openCloseMenue(){
        if(this.isMenueOpen){
            document.getElementById("sideMenu").dataset.visibility = "false";
            document.getElementById("webpage").dataset.ismenueshown = "false";
            this.isMenueOpen = false;
        }
        else{
            document.getElementById("sideMenu").dataset.visibility = "true";
            document.getElementById("webpage").dataset.ismenueshown = "true";
            this.isMenueOpen = true;
        }
    }
    hideShowProjects(){
        var tmp = document.getElementsByClassName("projectLink");
        for(var i = 0; i < tmp.length; i++){
            if(tmp[i].dataset.visibility == "false"){
                tmp[i].dataset.visibility = "true";
            }
            else{
                tmp[i].dataset.visibility = "false";
            }
        }
    }

}
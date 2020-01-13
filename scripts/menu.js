function openSideMenu(){
    document.getElementById('sideMenu').style.width = '250px';
    document.getElementById('webpage').style.marginLeft = '250px';
}

function closeSideMenu(){
    document.getElementById('sideMenu').style.width = '0';
    document.getElementById('webpage').style.marginLeft = '0';
}

function showHome(){
    document.getElementById('aboutme').style.display = "none";
    document.getElementById('home').style.display = "block";
}

function showAboutMe(){
    document.getElementById('home').style.display = "none";
    document.getElementById('aboutme').style.display = "block";
}


function showProjects(){
    var tmp = document.getElementsByClassName('project');
    for(var i = 0; i < tmp.length; i++){
        if(tmp[i].style.display === "none"){
            tmp[i].style.display = "block";
        }
        else{
            tmp[i].style.display = "none";
        }
    }
}
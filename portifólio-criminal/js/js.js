function openNav(){

    var x = document.getElementById("abas");

    if(x.className === "abas"){
        x.className += " menujs";
        document.getElementById("icon").innerHTML ="&Cross;";
    }else{
        x.className = "abas"
        document.getElementById("icon").innerHTML ="&#9776;";
    }

}
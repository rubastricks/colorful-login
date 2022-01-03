function myFunction(){
    var x = document.getElementById("tb2");
    if(x.type === "password") {
        x.type = "type";
    } else {
        x.type = "password";
    }
}
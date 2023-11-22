var textBox = document.getElementById("textbox");
textBox.addEventListener("input",function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elem){
        return elem != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});
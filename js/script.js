function create() {
    var select = document.getElementById("select");
    var colour = document.getElementById("colour");

    document.getElementById("new").style.color = colour.value
    var bgcolour = document.getElementById("bgcolour");
    document.getElementById("new").style.backgroundColor = bgcolour.value
    var content = document.getElementById("content");
    var elementContent = document.createTextNode(content.value);
    
    var newElement = document.getElementById("new");
    
    if (select.value == "heading") {
        var firstHead = document.createElement("h1");
        firstHead.appendChild(elementContent);
        newElement.appendChild(firstHead);
    } else if (select.value == "head") {
        var secondHead = document.createElement("h2");
        secondHead.appendChild(elementContent)
        newElement.appendChild(secondHead);
    } else if (select.value == "paragraph") {
        var para = document.createElement("p");
        para.appendChild(elementContent);
        newElement.appendChild(para);
    } else if (select.value == "button") {
        var button = document.createElement("button");
        button.appendChild(elementContent);
        newElement.appendChild(button);
    }
}
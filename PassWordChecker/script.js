var password = "wordpass";
var response;
var entryCount = 0
var entryLimit = 3
var error = false;

while(response != password && !error){
    if(entryCount < entryLimit){
        response = window.prompt("Enter Password:");
        entryCount++;
    } else{
        error = true;
    }
    
}

if(error == true){
    alert("TOO MANY ENTRIES");
} else{
    alert("CONGRATULATIONS!");
    document.write("<h1>WOOHOO!!! YOU GOT IT! &#127881;</h1>");
}




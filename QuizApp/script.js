var questions = [
    {
        prompt: "What colour are Apples?\n(a) Red/Green\n\
                (b) Purple\n(c) Orange",
        answer: "a"
    },
    {
        prompt: "What colour are Bananas?\n(a) Teal\n\
                (b) Magenta\n(c) Yellow",
        answer: "c"
    },
    {
        prompt: "What colour are strawberries?\n(a) Yellow\n\
                (b) Red\n(c) Blue",
        answer: "b"
    }];

var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("CORRECT!");
    } else{
        alert("WRONG!");
    }
}

document.write("<h1>YOU SCORED " + score + "/" + questions.length + "</h1>");

function talk(){

    var known = {
        "Who are you" : "Hi, I'm botsimp",
        "Who are you" : "Good :)",
        "What can I do for you" : "You would help me a lot by recommending me",
        "Your experience" : "I already have a long time working with various programming languajes and technologies such as: Java, C, C++, Arduino, PHP, SQL, Assembler, Cobol, Golang, Python, Matlab, Javascript, React, HTML, CSS",
        "Ok" : "Thank So Much",
        "Bye" : "Okay! <br>I hope we will talk..."
    };

    var userBox = document.getElementById('userBox').value;
                document.getElementById('chatLog').innerHTML = userBox + "<br>";
    if(userBox in known){
        document.getElementById('chatLog').innerHTML = known[userBox] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>"
    }

}
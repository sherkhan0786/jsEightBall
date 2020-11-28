
// First part to take input
function div1 (){
    var uName = document.getElementById('uname').value;
    name =uName.charAt(0).toUpperCase() + uName.slice(1);
    
        document.getElementById('showName').innerHTML = "Hey! " +"<span style='color:#e8971e; font-size:30px'>"+ name+"</span>" + " You are Playing Magic Game Best of Luck..";
        var x=document.getElementById("div1");
        x.style.display="none";
        document.getElementById("div2").style.display = "block";
}

// Decision making part

// Div2 part
function quit() {
    // 
    // document.getElementById('showName').innerHTML = "Hey " +"<span style='color:green'>"+ name+"</span>" + " good luck for next time";
    alert('Hey! ' + name + ' Wishing You good luck for next time');
    // var x=document.getElementById("div2");
    //     x.style.display="none";
        window.location.reload("Refresh");
}

// To start question
function start() {
    var x=document.getElementById("div3");
    x.style.display = "block";
    var x=document.getElementById("div2");
    x.style.display = "none";
}

// Div 3 part
function select() {
    var userQuestion = document.getElementById('opt').value;
    document.getElementById('question').innerHTML ="<span style='color:red'>Question: </span>" +userQuestion;
    var randomNumner = Math.floor((Math.random() * 15) + 1);
    var eightBall = [' It is certain.', 'It is decidedly so.', ' Without a doubt.', ' Yes – definitely.',
     'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Signs point to yes.', 
     'Reply hazy, try again.', 'Ask again later.', ' Better not tell you now.', 'Cannot predict now.',
     'Concentrate and ask again.', ' Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.'
     ,'Very doubtful.']
    document.getElementById('answer').innerHTML = "<span style='color:#0efeff'>Answer: </span>"+ eightBall[randomNumner];
}
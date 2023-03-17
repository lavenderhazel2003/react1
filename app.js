const submitButton = document.getElementById("submit")
console.log(submitButton);
var randomNumber= Math.round(Math.random()*100);
console.log(randomNumber);
var live=10;
var text;

submitButton.onclick=()=>{                      //to fetch vlues from the user
    var inputvalue = document.getElementById("input-number").value;
    console.log(inputvalue);
    live--;
    if(inputvalue == randomNumber)
    {
        location.href= `./win.html`
    }
    else if(live == 0)
    {                    //=== is for strict checking
        location.href=`./lose.html`
    }
    else if(inputvalue > randomNumber)
    {
        text = `Your guess is too high. ${live} remaining`;
    }
    else if(inputvalue < randomNumber)
    {
        text = `Your guess is too low. ${live} remaining`;
    } 
console.log(live);
console.log(text);
}
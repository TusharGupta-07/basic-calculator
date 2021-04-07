/*
function getPrevious()
{
    return document.getElementById("prevValue").innerText;
}

function printPreviousValue(num)
{
    document.getElementById("prevValue").innerText = num;
}

function getCurrent()
{
    return document.getElementById("currValue").innerText;
}

function printCurrentValue(num)
{
    if(num == "")
    {
        document.getElementById("currValue").innerText = num;
    }
    else{
        document.getElementById("currValue").innerText = commaSeprated(num);
    }
}

function commaSeprated(num)
{
    if(num == "-")
    {
        return "";
    }
    var x = Number(num);
    var converted = x.toLocaleString("en");
    return converted;
}

function removeComma(num)
{
    return Number(num.replace(/,/g,''));
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++)
    {
        number[i].addEventListener('click',function() 
        {                           
            var output = removeComma(getCurrent());
            if(output != NaN)
                {
                    output = output+this.id;
                    printCurrentValue(output);
                }
            else
            {
                output = out
            }
        });
    }

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++)
    {
        operator[i].addEventListener('click', function() 
        {                           
            if(this.id == "clear")
            {
                printCurrentValue("");
                printPreviousValue("");
            }

            else if(this.id == "backspace")
            {
                var output = removeComma(getCurrent()).toString();
                if(output)
                {
                    output = output.substr(0, output.length-1);
                    printCurrentValue(output);
                }
            }

            else
            {
                var output = getCurrent();
                var previous = getPrevious();

                if(output == "" && previous != "")
                {
                    if(isNaN(previous[previous.length-1]))
                    {
                        previous = previous.substr(0, previous.length-1);
                    }
                }
                if(output != "" || previous != "")
                {
                    
                    output = output == "" ? output : removeComma(output);
                    previous = previous+output;
                    if(this.id == "=")
                    {
                        var result = eval(previous);
                        printCurrentValue(result);
                        printPreviousValue("");
                    }
                    else
                    {
                        previous = previous+this.id;
                        printPreviousValue(previous);
                        printCurrentValue("");
                    }
                }
            }

        });
        
    }
*/

let screen = document.getElementById('output');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "CE")
        {
            screenValue = screen.value.substring(0, screen.value.length - 1);
            screen.value = screenValue;
        }

        else if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText == "+/-")
        {
            if(!Number.isInteger(screen.value[screen.value.length-1]))
            {
                if(screen.value[screen.value.length-1] == '+')
                {
                    buttonText = '-';
                    screenValue = screen.value.substring(0, screen.value.length - 1) + buttonText;
                }
                else if(screen.value[screen.value.length-1] == '-')
                {
                    buttonText = '+';
                    screenValue = screen.value.substring(0, screen.value.length - 1) + buttonText;
                }
            }

            
            screen.value = screenValue;
        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
  
}

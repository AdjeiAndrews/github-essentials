document.querySelector('#push').onclick = function() 
{
    if(document.querySelector('#newtask input').value.length == 0)
    {
        window.alert("Please Enter a Task!");
    }

}
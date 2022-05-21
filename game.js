//event to execute the script only after the page has loaded
//This is used to bypass the fact that script is in the head element in HTML
window.onload = function event(){
    load();
}

var game = false;
var points = 0;

function load(){
    //declaring element objects
    const startBtn = document.getElementById('start');
    const wall = document.querySelectorAll('.boundary:not(.example)');
    const endBtn =  document.getElementById('end');

    //if the user hovers over S, the game starts
    startBtn.addEventListener('mouseover',start);

    //if the user clicks on S, the game (points) reset
    startBtn.addEventListener('click',resetPoints);

    //In case of cheating
    document.getElementById('status').addEventListener('mouseover',cheating);
    document.getElementsByTagName('p')[0].addEventListener('mouseover',cheating);
    
    //if the user hovers over the maze wall 
    wall.forEach(item => {
        item.addEventListener('mouseover',youLost);
    })

    //if the user reaches the end E
    endBtn.addEventListener('mouseover',youWin)

}


//function when the user clicks on S
function start(){
    //if the game is over
    if (!game){
        game = true;

        //remove the red color from the maze walls by removing the class
        document.querySelectorAll('.boundary:not(.example)').forEach(item => {
            item.classList.remove('youlose');
        });
        
        document.getElementById("status").innerHTML = 'GO!!';
    }
}

//function when the user loses the game
function youLost(){
    //if the game has started
    if (game){
        //add the red color class to the maze walls
        document.querySelectorAll('.boundary:not(.example)').forEach(item => {
            item.classList.add('youlose');
        });

        points -=10;
        //update the status header element
        document.getElementById('status').innerText = `You Lost! -10pts Total: ${points}pts`;
        game = false;
    }
}

//function when the user wins the game
function youWin(){
    if (game){
        points += 5;
        document.getElementById('status').innerText = `You Win! +5pts Total: ${points}pts`;
        game = false;
    }
}

//function used in case of cheating
function cheating(){
    if (game){
        alert("Come on, man! Don't cheat. The game has been reset");
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        points = 0;
        game = false;      
    }
}

//this function resets the user's points 
function resetPoints(){
    if (points){
        alert("Your points have been reset!");
        document.getElementById("status").innerHTML = 'Begin by moving your mouse over the "S".';
        points = 0;
        game = false;
    }
}
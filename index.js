
$( document ).ready(loadStickman())
let wordArray = ["Hello", "Donald"]
let word = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
var array = [];
const wrongArray = [drawBase, drawStem, drawTop, drawConnector]
makeLines(word);    
let wrongCounter = -1;
function makeLines(word) {
    
    for(let i =0; i <word.length; i++){
        
        array.push("_ ")
    }
    return array;
};




function display(list){
    $('#right p').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    for(let i = 0; i < list.length; i++){
        $("#right p").append(list[i]);
    }
}
display(array);
$(".btns button").click(function(){
let isCorrect = false;
let char = word.split("");

let phrase = ""
$(this).css('background-color', 'purple')
$(this).css('color', 'black')
$(this).prop("disabled", true);
var letter = this.innerText
    for(let i = 0; i < char.length; i++){
        if (letter == char[i]){
            isCorrect = true
            array[i] = char[i];
            
        }
    }
 
if (isCorrect){
    display(array)
}else{
    
    wrongCounter += 1
    wrongArray[wrongCounter]()
    
}

})

$("#restart").click(function(){

})

function draw(x1, y1, x2, y2, lineWidth){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'black';
    ctx.lineWidth = lineWidth;

    // draw a red line
    ctx.beginPath();    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawBase(){
    draw(100, 125, 30, 125, 2)
}

function drawStem(){
    draw(65, 50, 65, 125, 4);
}
function drawTop(){
    draw(63, 50, 125, 50, 2);
}
function drawConnector(){
    draw(123, 50, 123, 65, 4)
}
function drawHead(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(123, 75, 10, 0, 2 * Math.PI);
    ctx.stroke(); 
   
}
function loadStickman(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let newImage = new Image();
    newImage.src = 'transparentStickman.png'

// When it loads
    newImage.onload = () => {
    // Draw the image onto the context
    ctx.drawImage(newImage, 95.5, 65, 55, 55);
}
}


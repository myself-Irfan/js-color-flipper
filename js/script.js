const set_color_arr = ["green", "olive", "red", "orange", "yellow", "grey", "crimson","blue", "skyblue", "pink", "purple"];
const set_btn = document.getElementById('btn-set');
const set_space = document.getElementById('value-set');
const set_header = document.querySelector('.header-set');

set_btn.addEventListener("click", function(){
    //gets random number according to the set array's length
    const randomNum_set = Math.floor(Math.random()*(set_color_arr.length));
    
    //changes the background color
    set_space.style.backgroundColor = set_color_arr[randomNum_set];

    //changes the color of the header text
    set_header.textContent = set_color_arr[randomNum_set];
})

const hex_color_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_btn = document.getElementById('btn-hex');
const hex_space = document.getElementById('value-hex');
const hex_header = document.querySelector('.header-hex');

hex_btn.addEventListener("click", function(){
    //generates a random hex number and inputs to a variable 
    let hexColor = '#';
    for(let i=0; i<6; i++){
        const randomNum_hex = Math.floor(Math.random()*(hex_color_arr.length));
        hexColor += hex_color_arr[randomNum_hex];
    }

    //changes the background color
    hex_space.style.backgroundColor = hexColor;

    //changes the color of the header text
    hex_header.textContent = hexColor;
})
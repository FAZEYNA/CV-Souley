const wolof = document.getElementById("wolof");
const fr = document.getElementById("fr");
const ang = document.getElementById("ang");
const de = document.getElementById("de");
const word = document.getElementById("word");
const excel = document.getElementById("excel");

deux = [de, excel];
trois = [word, ang];
cinq = [wolof, fr,];

function set_i(length, array){
    for(let i = 0; i < array.length; i++)
    {
        for (let index = 0; index < length; index++) 
        {
            if(index == 0)
            {
                array[i].innerHTML += `   <i class="fas fa-circle blue"></i>`;       
            }
            else{
                array[i].innerHTML += `<i class="fas fa-circle blue"></i>`;       
            }
        }
        for (let index = length; index < 5; index++) 
        {
           
            array[i].innerHTML += `<i class="fas fa-circle gray"></i>`;       
           
        }
    }
}

set_i(2,deux);
set_i(3,trois);
set_i(5,cinq);
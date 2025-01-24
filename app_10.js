console.log('labas');
//task 10
//Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

let viewport_width = document.documentElement.clientWidth;
let viewport_height = document.documentElement.clientHeight;
console.log(viewport_width);
console.log(viewport_height);

let div_el = document.querySelector(".zodziai");

for(let i = 0; i < 10; i++){
    C.map(item => {
        div_el.innerHTML += `<div style="position:absolute; top:${rand(0, viewport_height)}px; left:${rand(0, viewport_width)}px; color:${randomColor()}; font-size:${rand(10, 100)}px;">${item}</div>`
        console.log(rand(0,1000))
    })
}

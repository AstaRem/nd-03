console.log("labas");

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
    ];
    const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
    ];
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

// task 1 --------------------------
// Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

let ul_el =  document.querySelector(".gyvunai-A");
let A_isvardinta = '';

for (let i = 0; i < A.length; i++){
    ul_el.innerHTML += `<li>${A[i]}</li>`;
}

// task 2 --------------------------
// Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka


let ul_el_2 =  document.querySelector(".gyvunai-A-2");
let A_isvardinta_2 = '';
let A_spread = [...A]
console.log(A_spread);
let sorted_A = [];

for (let i = 1; i < A.length; i++){
    sorted_A = A_spread.sort();                    //kaip padaryti, kad lietuviskas raides irgi rusiuotu?
    ul_el_2.innerHTML += `<li>${sorted_A[i]}</li>`;  
}
console.log(sorted_A);

// task 3--------------------------
// Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip

let ul_el_3 =  document.querySelector(".gyvunai-A-3");
console.log(ul_el_3);
let new_array = A.concat(B);
console.log(new_array);
let sorted_new_array = new_array.sort();
console.log(sorted_new_array);

for (let i = 0; i < sorted_new_array.length; i++){
    ul_el_3.innerHTML += `<li>${sorted_new_array[i]}</li>`;  
}

// task 4 ------------------------
// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.
let section_el =  document.querySelector(".gyvunai-apskritime");

for (let i = 0; i < A.length; i++){
    section_el.innerHTML += `<div style="box-sizing: border-box;width: 150px; height:150px; border-radius:50%; background-color:#24496B; color:#FFFFFF; text-align: center; display:flex; justify-content:center; align-items: center; font-size: 22px; font-weight: bold;">${A[i]}</div>`
}


// task 5 --------------------
// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.
let section_el_2 =  document.querySelector(".gyvunai-apskritime-raud");

for (let i = 0; i < A.length; i++){
    section_el_2.innerHTML += `<div style="box-sizing: border-box;width: 150px; height:150px; border-radius:50%; background-color:#800000; color:#FFFFFF; text-align: center; display:flex; justify-content:center; align-items: center; font-size: 22px; font-weight: bold;">${A[i]}</div>`
}


//task 6
//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.
let section_el_3 =  document.querySelector(".gyvunai-apskritime-zali");

let one_word_A = A.filter(word => !word.includes(' '));
console.log(one_word_A)

for (let i = 0; i < one_word_A.length; i++){
    section_el_3.innerHTML += `<div style="box-sizing: border-box;width: 150px; height:150px; border-radius:50%; background-color:#06402b; color:#FFFFFF; text-align: center; display:flex; justify-content:center; align-items: center; font-size: 22px; font-weight: bold;">${one_word_A[i]}</div>`
}


// task 7
//Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle
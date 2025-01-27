//part 2

{/* <section class="skaiciai">
<span>18.57</span>
<span>7.8</span>
<span>5</span>
<span>40</span>
<span>-0.7</span>
</section>

<section class="raides">
<span>A</span>
<span>B</span>
<span>C</span>
<span>A</span>
<span>C</span>
<span>Z</span>
<span>B</span>
<span>C</span>
<span>C</span>
<span>A</span>
</section>

<section class="vardai"></section> */}

//task 1 ---
// 1. Paskaičiuoti klasės “skaiciai” sumą. Rezultatą išvesti į konsolę;
console.log("task 1 ------");

let span_num = 0;
let span_array = [];
let result = 0;
// let skaiciai_div = document.querySelector(".skaiciai");
for (let i = 1; i <= 5; i++){
   span_num = document.querySelector(`section.skaiciai > span:nth-child(${i})`);
    let span_value = span_num.innerText;
    span_array.push(parseFloat(span_value));
    console.log(span_array)
}
result = span_array.reduce((a, b) => {return a+b});

console.log(result)

//task 2 ------
// 2. Paskaičiuoti klasės “raides” raidžių A ir B bendrą kiekį. Rezultatą išvesti į konsolę;
console.log("task 2 -----");
let letter_array = [];
let counter = 0;

for (let i = 1; i <= 10; i++){
    letter_span = document.querySelector(`section.raides > span:nth-child(${i})`);
     let span_value = letter_span.innerText;
       letter_array.push(span_value)
     console.log(letter_array)
 }

 letter_array.map(item  => {
    if(item === 'A' || item === 'B'){
        counter++;
    }
 })
 
 console.log(`A ir B raidziu bendras kiekis: ${counter}`);

// task 3
// 3. Paskaičiuoti klasės “vardai” vardų, kurie yra ne Antanas kiekį. Rezultatą išvesti į konsolę;
console.log("task 3 -----");

let name_array = [];
let name_counter = 0;

for (let i = 1; i <= 10; i++){
    name_span = document.querySelector(`section.vardai > span:nth-child(${i})`);
     let span_value = name_span.innerText;
        name_array.push(span_value);
 }

 console.log(name_array);
 name_array.map(item => {
    if(item !== 'Antanas'){
        name_counter++;
    }
 })
 console.log(name_counter);

//task 4
// 4. Paskaičiuoti klasės “gyvuliai” gyvulių kiekį (ne span tagų kiekį). Rezultatą išvesti į konsolę;
console.log("task 4 -----");

let animals_array = [];
let animal_counter = 0;

for (let i = 1; i <= 9; i++){
    animal_span = document.querySelector(`section.gyvuliai > span:nth-child(${i})`);
     let span_value = animal_span.innerText;
        animals_array.push(span_value);
 }

 console.log(animals_array);

 animals_array.map(item => {
    if(item !== ''){
        animal_counter++;
    }
 })
 console.log(animal_counter);


//task 5 -----------------
// 5. Paskaičiuoti klasės “vaisiai” raidžių A (didžiųjų ir mažųjų kartu) kiekį. Rezultatą išvesti į konsolę;
console.log("task 5 -----");

let words_array = [];
let a_counter = [];

for (let i = 1; i <= 6; i++){
    word_span = document.querySelector(`section.vaisiai > span:nth-child(${i})`);
     let span_value = word_span.innerText;
        words_array.push(span_value);
 }

 console.log(words_array);

for (let i = 0; i < words_array.length; i++){
    console.log(words_array[i])
    for (let n = 0; n < words_array[i].length; n++){
        if (words_array[i][n] == 'A'){
            a_counter++;
        } else if (words_array[i][n] == 'a'){
            a_counter++;
        }
    }
}

 console.log(a_counter);


// task 6 ----------------
// 6. Paskaičiuoti klasės “miestai” miestų, kurie prasideda K arba baigiasi i kiekį. Rezultatą išvesti į konsolę;
console.log("task 6 -----");

let towns_array = [];
let match_counter = [];

for (let i = 1; i <= 10; i++){
    town_span = document.querySelector(`section.miestai > span:nth-child(${i})`);
     let span_value = town_span.innerText;
        towns_array.push(span_value);
 }

 console.log(towns_array);

 towns_array.forEach(town => {
    if (town[0] == 'K'){
        match_counter++;
    } else if(town[town.length-1] == 'i'){
        match_counter++;
    }
 }
 )

 console.log(match_counter);

 //task ------------------ 
// 7. Paskaičiuoti klasės “salys” šalių skaičių, kurių pavadinimai ilgesni nei 7 raidės. Rezultatą išvesti į konsolę;
console.log("task 7  -----");

let countries_array = [];
let country_counter = 0;

for (let i = 1; i <= 10; i++){
    country_span = document.querySelector(`section.salys> span:nth-child(${i})`);
     let span_value = country_span.innerText;
        countries_array.push(span_value);
 }

 console.log(countries_array);

 countries_array.forEach(country => {
    if(country.length > 7){
        console.log(country);
        country_counter++
    }
 })

 console.log(country_counter);

// task 8 ------------------
 // 8. Paskaičiuoti ko daugiau pliusų ar minusų klasėje “pliusai-minusai”. Rezultatą išvesti į konsolę;
 console.log("task 8  -----");

 let symbol_array = [];
 let plus_counter = 0;
 let minus_counter = 0;
 
 for (let i = 1; i <= 13; i++){
     symbol_span = document.querySelector(`section.pliusai-minusai> span:nth-child(${i})`);
      let span_value = symbol_span.innerText;
         symbol_array.push(span_value);
  }
 
  console.log(symbol_array);

  symbol_array.forEach(symbol => {
    if (symbol == '+'){
        plus_counter++;
    } else if (symbol == '-'){
        minus_counter++
    }
  })
  console.log(`Plus:${plus_counter}`);
  console.log(`Minus:${minus_counter}`);
  
//   task 9 --------
// 9. Paskaičiuoti kiek minusų yra klasėje “keisti-minusai”. Rezultatą išvesti į konsolę;
console.log("task 9  -----");
let all_symbols_array = [];

every_element = document.querySelectorAll(`section.keisti-minusai > span, section.keisti-minusai > i `); //returns Node list. .querySelector() return the first element

console.log(every_element);

every_element.forEach(element => all_symbols_array.push(element.innerText));
console.log(all_symbols_array);

//could do with counter, as befor, OR could use the filter() method. returns an array with items, matching th condition given

const counted_minus = all_symbols_array.filter(item => item === "-").length;
 console.log(`counted minus: ${counted_minus}`);


// task 10 ----------
// 10. Paskaičiuoti kiek klasėje “raudonos-salys” yra raudonų šalių. Rezultatą išvesti į konsolę;
console.log("task 10  -----");

let all_countries_array = [];
let red_countries = 0;

let all_countries = document.querySelectorAll("section.raudonos-salys > span");
console.log(all_countries);

all_countries.forEach(item => {
    if (item.style.color =="crimson"){
        red_countries++
    }
})

console.log(red_countries);
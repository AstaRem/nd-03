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

// 5. Paskaičiuoti klasės “vaisiai” raidžių A (didžiųjų ir mažųjų kartu) kiekį. Rezultatą išvesti į konsolę;
// 6. Paskaičiuoti klasės “miestai” miestų, kurie prasideda K arba baigiasi i kiekį. Rezultatą išvesti į konsolę;
// 7. Paskaičiuoti klasės “salys” šalių skaičių, kurių pavadinimai ilgesni nei 7 raidės. Rezultatą išvesti į konsolę;
// 8. Paskaičiuoti ko daugiau pliusų ar minusų klasėje “pliusai-minusai”. Rezultatą išvesti į konsolę;
// 9. Paskaičiuoti kiek minusų yra klasėje “keisti-minusai”. Rezultatą išvesti į konsolę;
// 10. Paskaičiuoti kiek klasėje “raudonos-salys” yra raudonų šalių. Rezultatą išvesti į konsolę;
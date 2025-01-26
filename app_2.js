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

let span_num = 0;
let span_array = [];
let result = 0;
let skaiciai_div = document.querySelector(".skaiciai");
for (let i = 1; i <= 5; i++){
   span_num = document.querySelector(`section.skaiciai > span:nth-child(${i})`);
    let span_value = span_num.innerText;
    span_array.push(parseFloat(span_value));
    console.log(span_array)
}
result = span_array.reduce((a, b) => {return a+b});

console.log(result)

// 2. Paskaičiuoti klasės “raides” raidžių A ir B bendrą kiekį. Rezultatą išvesti į konsolę;
// 3. Paskaičiuoti klasės “vardai” vardų, kurie yra ne Antanas kiekį. Rezultatą išvesti į konsolę;
// 4. Paskaičiuoti klasės “gyvuliai” gyvulių kiekį (ne span tagų kiekį). Rezultatą išvesti į konsolę;
// 5. Paskaičiuoti klasės “vaisiai” raidžių A (didžiųjų ir mažųjų kartu) kiekį. Rezultatą išvesti į konsolę;
// 6. Paskaičiuoti klasės “miestai” miestų, kurie prasideda K arba baigiasi i kiekį. Rezultatą išvesti į konsolę;
// 7. Paskaičiuoti klasės “salys” šalių skaičių, kurių pavadinimai ilgesni nei 7 raidės. Rezultatą išvesti į konsolę;
// 8. Paskaičiuoti ko daugiau pliusų ar minusų klasėje “pliusai-minusai”. Rezultatą išvesti į konsolę;
// 9. Paskaičiuoti kiek minusų yra klasėje “keisti-minusai”. Rezultatą išvesti į konsolę;
// 10. Paskaičiuoti kiek klasėje “raudonos-salys” yra raudonų šalių. Rezultatą išvesti į konsolę;
// https://www.omnicalculator.com/finance/absence-percentage

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absenteeismrateRadio = document.getElementById('absenteeismrateRadio');
const totalemployeesRadio = document.getElementById('totalemployeesRadio');
const totalworkdaysRadio = document.getElementById('totalworkdaysRadio');
const totaldaysabsentRadio = document.getElementById('totaldaysabsentRadio');

let absenteeismrate;
let totalemployees = v1;
let totalworkdays = v2;
let totaldaysabsent = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

absenteeismrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Total employees';
  variable2.textContent = 'Total workdays';
  variable3.textContent = 'Total days absent';
  totalemployees = v1;
  totalworkdays = v2;
  totaldaysabsent = v3;
  result.textContent = '';
});

totalemployeesRadio.addEventListener('click', function() {
  variable1.textContent = 'Absenteeism rate';
  variable2.textContent = 'Total workdays';
  variable3.textContent = 'Total days absent';
  absenteeismrate = v1;
  totalworkdays = v2;
  totaldaysabsent = v3;
  result.textContent = '';
});

totalworkdaysRadio.addEventListener('click', function() {
  variable1.textContent = 'Absenteeism rate';
  variable2.textContent = 'Total employees';
  variable3.textContent = 'Total days absent';
  absenteeismrate = v1;
  totalemployees = v2;
  totaldaysabsent = v3;
  result.textContent = '';
});

totaldaysabsentRadio.addEventListener('click', function() {
  variable1.textContent = 'Absenteeism rate';
  variable2.textContent = 'Total employees';
  variable3.textContent = 'Total workdays';
  absenteeismrate = v1;
  totalemployees = v2;
  totalworkdays = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absenteeismrateRadio.checked)
    result.textContent = `Absenteeism rate = ${computeAbsenteeismrate().toFixed(2)}`;

  else if(totalemployeesRadio.checked)
    result.textContent = `Total employees = ${computeTotalemployees().toFixed(2)}`;

  else if(totalworkdaysRadio.checked)
    result.textContent = `Total workdays = ${computeTotalworkdays().toFixed(2)}`;

  else if(totaldaysabsentRadio.checked)
    result.textContent = `Total days absent = ${computeTotaldaysabsent().toFixed(2)}`;
})

// calculation

function computeAbsenteeismrate() {
  return (Number(totaldaysabsent.value) / (Number(totalemployees.value) * Number(totalworkdays.value))) * 100;
}

function computeTotalemployees() {
  return Number(totaldaysabsent.value) / ((Number(absenteeismrate.value) / 100) * Number(totalworkdays.value));
}

function computeTotalworkdays() {
  return Number(totaldaysabsent.value) / (Number(totalemployees.value) * (Number(absenteeismrate.value) / 100));
}

function computeTotaldaysabsent() {
  return (Number(absenteeismrate.value) / 100) * (Number(totalemployees.value) * Number(totaldaysabsent.value));
}
// const presidents = [
//   { name: "Donald Trump", terms: 1, party: "R" },
//   { name: "Barack Obama", terms: 2, party: "D" },
//   { name: "George W. Bush", terms: 2, party: "R" },
//   { name: "Bill Clinton", terms: 2, party: "D" },
//   { name: "George H.W. Bush", terms: 1, party: "R" },
//   { name: "Ronald Reagan", terms: 2, party: "R" },
//   { name: "Jimmy Carter", terms: 1, party: "D" },
//   { name: "Gerald Ford", terms: 1, party: "R" },
//   { name: "Richard Nixon", terms: 2, party: "R" },
//   { name: "John F. Kennedy", terms: 1, party: "D" },
//   { name: "Lyndon Johnson", terms: 2, party: "D" },
//   { name: "Dwight Eisenhower", terms: 2, party: "R" },
// ];

// //1) Filter all presidents, leaving only the Democratic ones
// const democrats = presidents.filter((president) => president.party === "D");

// console.table(democrats);

// //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
// const republicans = presidents.filter(
//   (president) => president.party === "R" && president.terms === 1
// );

// console.table(republicans);

// //3) return only the last three presidents
// const lastThree = presidents.slice(-3);

// console.log(lastThree);

// //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
// const democratsTwo = presidents.filter(
//   (president) => president.party === "D" && president.terms === 2
// );
// console.log(democratsTwo);
// //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const symptoms = [
  { symptom: "Fever", occurrence: 1, severity: "S" },
  { symptom: "Aches", occurrence: 4, severity: "W" },
  { symptom: "Chills", occurrence: 3, severity: "W" },
  { symptom: "Fatigue", occurrence: 2, severity: "W" },
  { symptom: "Sneezing", occurrence: 1, severity: "W" },
  { symptom: "Coughing", occurrence: 1, severity: "W" },
  { symptom: "Stuffy Nose", occurrence: 2, severity: "S" },
  { symptom: "Sore Throat", occurrence: 3, severity: "W" },
  { symptom: "Headache", occurrence: 4, severity: "S" },
  { symptom: "Loss of Taste and Smell", occurrence: 4, severity: "S" },
];

//1) Filter all symptoms, leaving only the Strong ones.
const Strong = symptoms.filter((symptoms) => symptoms.severity === "S");

console.table(Strong);

//2) Filter all symptoms, leaving only weak symptoms with an occurence higher than 2.
const Weak = symptoms.filter(
  (symptoms) => symptoms.severity === "W" && symptoms.occurrence < 2
);

console.table(Weak);

//3) Make a table with only the first 6 symptoms.
const firstSix = symptoms.slice(0, 6);

console.table(firstSix);

//4) Log all symptoms with a strong severity and an occurence of 4.
const Frequent = symptoms.filter(
  (symptoms) => symptoms.severity === "S" && symptoms.occurrence === 4
);

console.log(Frequent);

//5) Write a script to check if the occurence for the symptom "Loss of Taste and Smell" is at least 3 or higher.
// If it is, then alert ("It's a COVID-19 Pandemic!"), otherwise alert ("It's Just Influenza")
const diagnosis = symptoms.filter(
  (symptoms) => symptoms.symptom === "Loss of Taste and Smell"
);
const COVID = diagnosis.filter((verdict) => {
  if (verdict.symptom === "Loss of Taste and Smell" || verdict.occurence <= 3) {
    alert("It's a COVID-19 Pandemic!");
  } else {
    alert("It's just Influenza");
  }
});

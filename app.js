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

// console.table(lastThree);

// //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
// const democratsTwo = presidents.filter(
//   (president) => president.party === "D" && president.terms === 2
// );

// //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const symptoms = [
  { symptom: "Fever", onset: 1, severity: "R" },
  { symptom: "Aches", onset: 2, severity: "D" },
  { symptom: "Chills", onset: 2, severity: "R" },
  { symptom: "Fatigue", onset: 2, severity: "D" },
  { symptom: "Weakness", onset: 1, severity: "R" },
  { symptom: "Sneezing", onset: 2, severity: "R" },
  { symptom: "Coughing", onset: 1, severity: "D" },
  { symptom: "Stuffy Nose", onset: 1, severity: "R" },
  { symptom: "Sore Throat", onset: 2, severity: "R" },
  { symptom: "Headache", onset: 1, severity: "D" },
  { symptom: "Lyndon Johnson", onset: 2, severity: "D" },
  { symptom: "Dwight Eisenhower", onset: 2, severity: "R" },
];

//1) Filter all presidents, leaving only the Democratic ones
const democrats = symptoms.filter((symptoms) => symptoms.severity === "D");

console.table(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const republicans = symptoms.filter(
  (symptoms) => symptoms.severity === "R" && symptoms.onset === 1
);

console.table(republicans);

//3) return only the last three presidents
const lastThree = symptoms.slice(-3);

console.table(lastThree);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const democratsTwo = symptoms.filter(
  (symptoms) => symptoms.severity === "D" && symptoms.onset === 2
);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

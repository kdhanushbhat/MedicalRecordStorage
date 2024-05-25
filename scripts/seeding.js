const { ethers } = require("hardhat");
const config = require("../src/config.json");
const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  const nowMilis = Date.now()
  const now =(new Date(nowMilis)).toString();
  const account = await ethers.getSigners();
  const medical = await ethers.getContractAt(
    "MedicalRecords",
    config[chainId].medical.address
  );
  console.log(`MedicalRecord smart contract fetched at ${medical.address}`);
  let transactionResponse;
  const user1 = account[0];
  
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Gosling",
      29,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "John Wright",
      25,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Gosling",
      29,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "John Wright",
      25,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Gosling",
      29,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "John Wright",
      25,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Gosling",
      29,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      now,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Paul Wright",
      34,
      now,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      now,
      "Male",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      now,
      "Male",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan Guptil",
      34,
      now,
      "Male",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Vrinda Shetty",
      77,
      now,
      "Female",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Alan Watson",
      23,
      now,
      "Female",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "John Wright",
      25,
      now,
      "Female",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sherlock Holmes",
      83,
      now,
      "Female",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Joe Biden",
      93,
      now,
      "Female",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical.connect(user1).deleteRecord(69);
  await transactionResponse.wait();
  console.log(`Record deleted`);
  transactionResponse = await medical.connect(user1).deleteRecord(55);
  await transactionResponse.wait();
  console.log(`Record deleted`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

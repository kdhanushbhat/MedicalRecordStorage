# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

*Steps:*
npm i \n
npx hardhat node(starts blockchain server server - should be running when application in use) \n
npx hardhat run scripts/deploy.js --netowrk localhost(one time run. Genrates artifacts folder) \n
npx hardhat run scripts/seeding.js --network locahost(one time run) \n
npm run start(starts server for front end) \n

Note: \n 
--> Please keep the hardhat configuration as in hardhat.config.js and src/config.js for the application to pick the right id.\n --> In case any issue occurs while running app, make sure abi in artifacts/MedicalRecords.json[abi] and src/abi/MedicalRecords.json are the same.\n


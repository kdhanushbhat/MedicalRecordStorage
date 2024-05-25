# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

```Steps:
npm I
npx hardhat node(starts blockchain server server - should be running when application in use)
npx hardhat run scripts/deploy.js --netowrk localhost(one time run. Genrates artifacts folder) 
npx hardhat run scripts/seeding.js --network locahost(one time run) 
npm run start(starts server for front end)```


```Note:
--> Please keep the hardhat configuration as in hardhat.config.js and src/config.js for the application to pick the right id.`
--> In case any issue occurs while running app, make sure abi in artifacts/MedicalRecords.json[abi] and src/abi/MedicalRecords.json are the same.```




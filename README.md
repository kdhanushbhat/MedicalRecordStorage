# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

```
Steps:
npm I
`npx hardhat node` (starts blockchain server server - should be running when application in use. Server should be alive while below commands are run)
`npx hardhat run scripts/deploy.js --network localhost` (one time run. Genrates artifacts folder) 
Copy address where smart contract is deployed and save it in src/config.json address field.
`npx hardhat run scripts/seeding.js --network localhost` (one time run) 
`npm run start` (starts server for front end)
```


```
Note:
--> Please keep the hardhat configuration as in hardhat.config.js and src/config.js for the application to pick the right id.
--> In case any issue occurs while running app, make sure abi in artifacts/MedicalRecords.json[abi] and src/abi/MedicalRecords.json are the same.
```




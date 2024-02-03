# About the Project

On this portfolio automation project, I've used Cypress to automate 3 applications "https://phptravels.net/" and "https://demo.nopcommerce.com/" for front-end automation, and the API Application "https://serverest.dev" for Back-End automation. These applications are automation practice tools, used for certification training of different automation test frameworks.

The purpose of this project was to demonstrate proficiency in Cypress back-end and front-end automation on a code challenge. I also used the design pattern "Page Objects" to have better maintenance and reusability of the code, and I used fixtures files to manage data.
Regarding reports and execution, the "cypress-mochawesome-reporter" was used to generate the execution report. There was configured a CI pipelines execution using Github Actions, the trigger was a Push execution. After each execution, the report artifact will be attached to the pipeline Workflow.


# Execution Instructions

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from Github, run these commands:

```bash
## Clone this repository to a local directory.
git clone https://github.com/FelipeMatosQA/Cypress_Front-end_and_Back-end_CodeChallenge.git
## Enter in the project folder
cd Cypress_Front-end_and_Back-end_CodeChallenge
## Install the node modules
npm install
## Install Cypress locally
npx cypress install --force
## To run the tests visually use
npx cypress open
## To run the tests in a headless inviroment use
npx cypress run
```

# Report Artifact

In the image below, you can see the report layout, that has passed all tests.

![Captura de tela 2024-02-03 191839](https://github.com/FelipeMatosQA/Cypress_Front-end_and_Back-end_CodeChallenge/assets/121990373/d4dda023-0d7a-47df-a363-5f774f9e9fff)

# Atualization about this project

The Application "https://phptravels.net/" has been updated and the register feature has broken. However, I am unable to register for an account, resulting in broken tests.
So the test scripts of this application are being skipped.
On the other hand, the entire logic of the script tests is completely correct and available for you to see.

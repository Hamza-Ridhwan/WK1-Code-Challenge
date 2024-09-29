// Function to calculate Net Salary
function netSalaryCalculator() {
    // Get the user's basic salary and benefits as input
    let basicSalary = 50000;
    let benefits = 10000;

    // Validate the inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("40000");
        return;
    }

    // Calculate the gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax) based on KRA tax rates
    let payee = calculatePAYE(grossSalary);

    // Calculate NHIF deductions based on NHIF rate slabs
    let nhifDeductions = calculateNHIF(grossSalary);

    // Calculate NSSF deductions (we'll assume a 6% deduction rate on the first Ksh 18,000 of the salary)
    let nssfDeductions = calculateNSSF(grossSalary);

    // Calculate net salary
    let netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);

    // Output the results
    console.log("Gross Salary: " + grossSalary.toFixed(2));
    console.log("PAYE (Tax): " + payee.toFixed(2));
    console.log("NHIF Deductions: " + nhifDeductions.toFixed(2));
    console.log("NSSF Deductions: " + nssfDeductions.toFixed(2));
    console.log("Net Salary: " + netSalary.toFixed(2));
}

// Function to calculate PAYE (Tax) based on KRA rates
function calculatePAYE(grossSalary) {
    let payee = 0;

    // KRA tax rates (as per 2024):
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1; // 10% tax for income <= Ksh 24,000
    } else if (grossSalary <= 32333) {
        payee = (24000 * 0.1) + ((grossSalary - 24000) * 0.25); // 25% for income between Ksh 24,001 and Ksh 32,333
    } else {
        payee = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30); // 30% for income above Ksh 32,333
    }

    return payee;
}

// Function to calculate NHIF deductions based on NHIF slabs
function calculateNHIF(grossSalary) {
    let nhif = 0;

    // NHIF rates as per the provided link
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700; // For salaries above Ksh 100,000

    return nhif;
}

// Function to calculate NSSF deductions (assumed 6% of salary up to a maximum of Ksh 18,000)
function calculateNSSF(grossSalary) {
    let nssfRate = 0.06; // 6% NSSF contribution
    let maxSalaryForNSSF = 18000;

    // Calculate NSSF based on the capped salary
    return Math.min(grossSalary, maxSalaryForNSSF) * nssfRate;
}

// Call the function to run the program
netSalaryCalculator();

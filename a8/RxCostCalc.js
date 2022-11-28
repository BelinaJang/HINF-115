function calculateCost() {
    let pillCost = getPillCount() * getPillPrice();
    console.log("pillCost: " + pillCost);
    let preTaxCost = pillCost + getDispensingFees();
    console.log("preTaxCost: " + preTaxCost);
    let tax = getTaxRate() * preTaxCost;
    console.log("tax: " + tax);
    let totalCost = preTaxCost + tax;
    console.log("Total Cost: " + totalCost);
    return totalCost;
}

function calculateRemainingBudget() {
    let remainingBudget = getPatientBudget() - calculateCost();
    console.log("remainingBudget: " + remainingBudget);
    return remainingBudget;
}

function setRemainingBudget() {
    document.getElementById("remaining-budget").value = calculateRemainingBudget();
}

function getTaxRate() {
    let taxRate = parseFloat(document.getElementById("tax-rate").value);
    console.log("tax-rate: " + taxRate);
    return taxRate;
}

function getPillPrice() {
    let pillPrice = parseFloat(document.getElementById("pill-price").value);
    console.log("pill-price: " + pillPrice);
    return pillPrice;
}

function getDispensingFees() {
    let dispensingFees = parseFloat(document.getElementById("dispensing-fees").value);
    console.log("dispensing-fees: " + dispensingFees);
    return dispensingFees;
}

function getPillCount() {
    let pillCount = parseFloat(document.getElementById("pill-count").value);
    console.log("pill-count: " + pillCount);
    return pillCount;
}

function getPatientBudget() {
    let patientBudget = parseFloat(document.getElementById("patient-budget").value);
    console.log("patient-budget: " + patientBudget);
    return patientBudget;
}

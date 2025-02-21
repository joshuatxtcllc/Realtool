function performCMA() {
    const address = document.getElementById('propertyAddress').value;
    // Placeholder logic for CMA
    document.getElementById('cmaResults').innerText = `CMA results for ${address} will be displayed here.`;
}

function calculateROI() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const rentalIncome = parseFloat(document.getElementById('rentalIncome').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(purchasePrice) || isNaN(rentalIncome) || isNaN(expenses)) {
        document.getElementById('calculationResults').innerText = 'Please enter valid numbers.';
        return;
    }

    const annualIncome = rentalIncome * 12;
    const annualExpenses = expenses * 12;
    const netIncome = annualIncome - annualExpenses;
    const roi = (netIncome / purchasePrice) * 100;

    document.getElementById('calculationResults').innerText = `ROI: ${roi.toFixed(2)}%`;
}

function performResearch() {
    const location = document.getElementById('marketLocation').value;
    // Placeholder logic for market research
    document.getElementById('researchResults').innerText = `Market research for ${location} will be displayed here.`;
}

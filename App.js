document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    addBudgetEntry(description, amount);
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});

function addBudgetEntry(description, amount) {
    const entryDiv = document.createElement('div');
    entryDiv.textContent = `${description}: $${amount.toFixed(2)}`;
    document.getElementById('budgetList').appendChild(entryDiv);
}

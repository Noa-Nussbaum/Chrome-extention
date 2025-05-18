// Get values
const saveBtn = document.getElementById("expense-btn")
const expense = document.getElementById("expense-el")
const amount = document.getElementById("amount-el")
const expenseUlEl = document.getElementById("expense-ul-el")
const amountUlEl = document.getElementById("amount-ul-el")

// Set empty lists
let expenseList = []
let amountList = []

// Save the input
saveBtn.addEventListener("click", function(){
    console.log("Expense saved successfully!");

    expenseList.push(`<li>
        <a target ='_blank' href=' ${expense.value} '>
        ${expense.value} 
        </a>
        </li>`)
    amountList.push(amount.value)

    expense.value = "Expense location"
    amount.value = 0

    expenseUlEl.innerHTML = expenseList
    amountUlEl.innerHTML = amountList
})
// Get values
const saveBtn = document.getElementById("expense-btn")
const expenseEl = document.getElementById("expense-el")
const amountEl = document.getElementById("amount-el")
const expenseUlEl = document.getElementById("expense-ul-el")
const deleteBtn = document.getElementById("delete-btn")

let expenseList = []
let total = 0

const totalEl = document.getElementById("total-el")


// Get existing list / start new one
const expenseListStorage = JSON.parse(localStorage.getItem("MyExpenses"));

if(Array.isArray(expenseListStorage) && expenseListStorage.every(e => e !== null)){
    expenseList = expenseListStorage
    expenseList.forEach((item) => {
        total += parseFloat(item.value) || 0
    });
    render(expenseList)
}


// Render list
function render(leads) {
    // Clear existing list
    expenseUlEl.innerHTML = "";

    leads.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name}: $${item.value} | ${item.date}`;
        expenseUlEl.appendChild(li);
    });

    totalEl.innerHTML = `TOTAL: $${total}`
}

// Delete all we have so far
deleteBtn.addEventListener("dblclick", function(){

    localStorage.clear()
    expenseList = []
    render(expenseList)

    expenseEl.value = ""
    amountEl.value = ""

    total = 0
    render(expenseList)

})

// Save the input
saveBtn.addEventListener("click", function(){


    const today = new Date();
    const formatted = today.toISOString().split('T')[0];

    console.log(formatted)

    // Retrieve value
    let expense = expenseEl.value
    let amount = parseFloat(amountEl.value) || 0

    if(expense && amount){
        const item = {
            name: expense,
            value: parseFloat(amount),
            date: formatted
        };

        expenseList.push(item)
        localStorage.setItem("MyExpenses", JSON.stringify(expenseList))
        // Render function
        total += amount
        render(expenseList)

        console.log("Expense saved successfully!");

        
    }    
    // Restart default background values
    expenseEl.value = ""
    amountEl.value = ""

    console.log(expenseList)
  
})






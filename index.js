// Get values
const saveBtn = document.getElementById("expense-btn")
const expenseEl = document.getElementById("expense-el")
const amountEl = document.getElementById("amount-el")
const expenseUlEl = document.getElementById("expense-ul-el")
const deleteBtn = document.getElementById("delete-btn")

let expenseList = []

const totalEl = document.getElementById("total-el")
let total = 0

// Get existing list / start new one
const expenseListStorage = JSON.parse(localStorage.getItem("MyExpenses"));

if(Array.isArray(expenseListStorage) && expenseListStorage.every(e => e !== null)){
    expenseList = expenseListStorage
    render(expenseList)
}


// Render list
function render(leads) {
    // Clear existing list
    expenseUlEl.innerHTML = "";

    leads.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} : $${item.value}`;
        expenseUlEl.appendChild(li);
    });

    totalEl.innerHTML = `TOTAL: $${total}`
    // totalEl.innerHTML = "hello"
    console.log(total)
}

// Delete all we have so far
deleteBtn.addEventListener("dblclick", function(){

    localStorage.clear()
    expenseList = []
    render(expenseList)

    expenseEl.value = ""
    amountEl.value = ""
    // window.resizeTo(document.body.scrollWidth, document.body.scrollHeight);

    total = 0

})

// Save the input
saveBtn.addEventListener("click", function(){
    // Retrieve value
    let expense = expenseEl.value
    let amount = parseFloat(amountEl.value) || 0

    if(expense && amount){
        const item = {
            name: expense,
            value: parseFloat(amount)
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






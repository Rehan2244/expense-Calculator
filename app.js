var reasonInput=document.querySelector('#reason');
var amountInput=document.querySelector('#amount');
var clearBtn=document.querySelector('#clear-btn');
var addBtn=document.querySelector('#add-btn');
var expensesList=document.querySelector('#expenses-list');
var totalExpensesOutput=document.querySelector('#total-expenses');
var alertCtrl=document.querySelector('#alertControls');

let totalExpenses=0;

const clear=()=>{
    reasonInput.value="";
    amountInput.value="";
  };


addBtn.addEventListener('click',()=>{
    const enteredReason=reasonInput.value;
    const enteredAmount=amountInput.value;
    if(enteredReason.trim().length<=0 || 
    enteredAmount<=0 ||
    enteredAmount.trim().length<=0)
    {
       
      alertCtrl.create({
          message:'enter valid values',
          header:'Invalid',
          buttons:['okay']
    }).then(alertElement=>
    {
        alertElement.present();

    });
    return; 
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent=enteredReason+': $'+enteredAmount;
    
    expensesList.appendChild(newItem);

    totalExpenses+= +enteredAmount;
    totalExpensesOutput.textContent="$"+totalExpenses;
    clear();
});

clearBtn.addEventListener('click',clear);
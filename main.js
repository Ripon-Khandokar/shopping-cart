/////PLUS BUTTON EVENT HANDLER/////
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
    let totalNumber =  inputNumber("valueNumber");
    let balance = updateBalance(totalNumber,1219)
    document.getElementById("priceAmount").innerText = balance;    
    
    updateSubTotal("priceAmount","price2","subTotal");


});


const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function(){
    let totalNumber = inputNumber("valueNumber2");
    let balance = updateBalance(totalNumber,59)
   document.getElementById("price2").innerText = balance;    
   updateSubTotal( "priceAmount", "price2","subTotal")

});

function inputNumber(id){
    let valueNumber = document.getElementById(id).value;
    let value = parseFloat(valueNumber);
    value++;
    document.getElementById(id).value = value; 
    return value;
};
function updateBalance (number , taka){
   let numberPrice = number * taka;
   return numberPrice;
};





/////MINUS BUTTON EVENT HANDLER/////
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function(){
   let minusNumber = minusInputNumber("valueNumber");
   minusBalance(minusNumber,1219,"priceAmount")
   updateSubTotal("priceAmount", "price2", "subTotal")



});

const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function(){
  let minusNumber2 =  minusInputNumber("valueNumber2");
  minusBalance(minusNumber2, 59,"price2");
  updateSubTotal("priceAmount", "price2", "subTotal")



})
function minusInputNumber(id){
    let valueNumber = document.getElementById(id).value;
    let value = parseFloat(valueNumber);
    value--;
    document.getElementById(id).value = value;
    return value;
    
};

function minusBalance(minusNumber,taka,id){
   let balance = minusNumber*taka;
   document.getElementById(id).innerText = balance;


}

////SUB TOTAL EVENT HANDLER////
function updateSubTotal(id,id2,id3){
    let amount = document.getElementById(id).innerText;
    let amountNumber = parseFloat(amount);

    let amount2 = document.getElementById(id2).innerText;
    let amount2Number = parseFloat(amount2);
    let subTotal = amountNumber+amount2Number;
    document.getElementById(id3).innerText = subTotal;
    document.getElementById("total").innerText = subTotal; 
}
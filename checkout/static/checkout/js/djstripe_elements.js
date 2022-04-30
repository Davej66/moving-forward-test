


function planSelect(name, price, priceId) {
  var inputs = document.getElementsByTagName('input');

  for(var i = 0; i<inputs.length; i++){
    inputs[i].checked = false;
    if(inputs[i].name== name){

      inputs[i].checked = true;
    }
  }
  var n = document.getElementById('plan');
  var p = document.getElementById('price');
  var pid = document.getElementById('priceId');
  var a = '<a href="https://buy.stripe.com/test_7sI3fZchTaAGd3yfYZ" target="_blank" class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">fitness</a>';
  var b = '<a href="https://buy.stripe.com/test_cN2dUD4Pr6kqfbG8ww" target="_blank" class="shop-now-button btn btn-lg rounded-0 text-uppercase py-3">both</a>';

  if (price == '£15.99 GBP/month') {
    price = a;
  } else {
    price = b;
  }
    

  n.innerHTML = name;
  p.innerHTML = price;
  pid.innerHTML = priceId;
  
      //document.getElementById("submit").disabled = True;

      


//}

//we'll add payment form handling here
    let paymentForm = document.getElementById('subscription-form');
  if (paymentForm) {

    paymentForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      changeLoadingState(true);


        // create new payment method & create subscription
        createPaymentMethod({ card });
    });
  }

}





var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.getElementById("submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.getElementById("submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};
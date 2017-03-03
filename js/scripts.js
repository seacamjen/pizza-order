//Business Logic
function Pizza (firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;
  this.circumferenceTotal = 0;
  this.topping = 0;
  this.totalPrice = 0;
}

Pizza.prototype.addToppingOne = function () {
  this.topping += 1;
}

Pizza.prototype.addToppingTwo = function () {
  this.topping += 2;
}

Pizza.prototype.smallSize = function () {
  this.circumferenceTotal += 10;
}

Pizza.prototype.mediumSize = function () {
  this.circumferenceTotal += 17;
}

Pizza.prototype.largeSize = function () {
  this.circumferenceTotal += 25;
}

Pizza.prototype.costOfPizza = function () {
  this.totalPrice = this.circumferenceTotal + this.topping;
}


//User Interface
$(function () {

  $("#add-pizza").click(function() {
    $("#otherPizza").append('<div class="col-md-3">' +
                              '<div class="form-group">' +
                                '<div class="panel panel-success">' +
                                  '<div class="panel-heading">' +
                                    '<h2 class="panel-title">Select Size of Pizza</h2>' +
                                  '</div>' +
                                  '<div class="panel-body">' +
                              '<input type="checkbox" name="pizza-size" value="10"> Small<br>' +
                              '<input type="checkbox" name="pizza-size" value="17"> Medium<br>' +
                              '<input type="checkbox" name="pizza-size" value="25"> Large<br>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<div class="col-md-3">' +
                              '<div class="form-group">' +
                              '<div class="panel panel-success">' +
                                '<div class="panel-heading">' +
                                  '<p class="panel-title">Select Toppings:</p>' +
                                '</div>' +
                                '<div class="panel-body">' +
                                '<input type="checkbox" name="pizza-topping" value="1">Pepperoni<br>' +
                                '<input type="checkbox" name="pizza-topping" value="2">Sausage<br>' +
                                '<input type="checkbox" name="pizza-topping" value="1">Extra Cheese<br>' +
                                '<input type="checkbox" name="pizza-topping" value="1">Bacon<br>' +
                                '<input type="checkbox" name="pizza-topping" value="2">Pineapple<br>' +
                                '<input type="checkbox" name="pizza-topping" value="1">Spinach<br>' +
                                '<input type="checkbox" name="pizza-topping" value="1">Onions<br>' +
                                '<input type="checkbox" name="pizza-topping" value="2">Ham<br>' +
                                '<input type="checkbox" name="pizza-topping" value="1">Mushrooms<br>' +
                              '</div>' +
                              '</div>' +
                              '</div>' +
                              '</div>');
  });

  $("#pizzaSelections").submit(function () {
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedPhoneNumber = $("input#new-phone").val();

    var pricingPizza = new Pizza (inputtedFirstName, inputtedPhoneNumber);


    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var topping = parseInt($(this).val());
      if (topping === 10) {
        pricingPizza.smallSize();
      } else if (topping === 17) {
        pricingPizza.mediumSize();
      } else if (topping === 25){
        pricingPizza.largeSize();
      }
    });

    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var topping = parseInt($(this).val());
      if (topping === 1) {
        pricingPizza.addToppingOne();
      } else if (topping === 2) {
        pricingPizza.addToppingTwo();
      }
    });

    pricingPizza.costOfPizza();

    $("#navbarTotal").html("  " + pricingPizza.firstName + " your total is $" + pricingPizza.totalPrice);
    console.log(pricingPizza);
  });
});

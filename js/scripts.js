//Business Logic
function Pizza (circumference) {
  this.circumference = circumference;
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
  this.circumferenceTotal += 15;
}

Pizza.prototype.largeSize = function () {
  this.circumferenceTotal += 20;
}

Pizza.prototype.costOfPizza = function () {
  this.totalPrice = this.circumferenceTotal + this.topping;
}


//User Interface
$(function () {
  $("#pizzaSelections").submit(function () {
    event.preventDefault();

    var circumference = $("input:radio[name=pizzaSize]:checked").val();

    var pricingPizza = new Pizza (circumference);

    if (circumference === "sm") {
      pricingPizza.smallSize();
    } else if (circumference === "med") {
      pricingPizza.mediumSize();
    } else if (circumference === "lrg") {
      pricingPizza.largeSize();
    }

    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var topping = parseInt($(this).val());
      if (topping === 1) {
        pricingPizza.addToppingOne();
      } else if (topping === 2) {
        pricingPizza.addToppingTwo();
      }
    });

    pricingPizza.costOfPizza();

    $("#showTotal").html("<h3> $" + pricingPizza.totalPrice + "</h3>");

    console.log(pricingPizza);
  });
});

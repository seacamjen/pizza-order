//Business Logic
function Pizza (circumference) {
  this.circumference = circumference;
  this.topping = 0;
  this.toppingTotal = 0;
  this.circumferenceTotal = 0;
}

Pizza.prototype.addToppingOne = function () {
  this.topping += 1;
}

Pizza.prototype.addToppingTwo = function () {
  this.topping += 2;
}
//
// Pizza.prototype.smallSize = function () {
//   ($10);
// }
//
// Pizza.prototype.mediumSize = function () {
//   ($15);
// }
//
// Pizza.prototype.largeSize = function () {
//   ($20);
// }
//
// Pizza.prototype.costOfPizza = function () {
//   (add $1 per topping);
// }


//User Interface
$(function () {
  $("#pizzaSelections").submit(function () {
    event.preventDefault();

    var circumference = $("input:radio[name=pizzaSize]:checked").val();

    var pricingPizza = new Pizza (circumference);

    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var topping = parseInt($(this).val());
      if (topping === 1) {
        pricingPizza.addToppingOne();
      } else if (topping === 2) {
        pricingPizza.addToppingTwo();
      } 
    });





    console.log(pricingPizza);
  });
});

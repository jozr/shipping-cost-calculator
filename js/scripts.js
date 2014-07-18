var shipping = {
  doStuff: function() {
    this.cost = ((this.distance * .07 + 2 * this.weight)*this.quantity);
  }
}


$(document).ready(function() {
  $("form#shipping-form").submit(function(event) {
    event.preventDefault();

    shipping.quantity = parseInt($("#quantity").val());
    shipping.distance = parseInt($("#distance").val());
    shipping.weight = parseInt($("#weight").val());
    shipping.doStuff();
    $(".output").append("<li>" + "Shipping " + shipping.weight + "lbs. " + shipping.distance + " miles from Portland is " + "$" + shipping.cost + "</li>");
  });
});

$(function(){ 
  
  $('userSignInput').on('keyup', function(e) {
    
    var inputLength = $(this).val().length;
    $('#tiles').text(inputLength);
    updatePrice(inputLength);
    
  })
  
  $('userFontInput').on('click', function(e) {
    
    var inputFont = $(this).is(':checked');
    
    updatePrice($('userSignInput').val().length, inputFont)
  

  })
  
  $('#confirmOrder').on('click', function(e) {
    event.preventDefault();
  
    var previewMsg = $('#userSignInput').val();
    previewMsg += '<a href="#" id="cancelPreview">x</a>';
    
    $('#previewScreen').append(previewMsg)
     $('#previewScreen').toggle({ 'right': '0px' }, 250);

  })
  
  $('#cancelPreview').on('click', function(e) {
    event.preventDefault();
  
     $('#previewScreen').toggle();

  })
  
 })
  
  function updatePrice(signLength, fontUpgrade) {
    var costPerTile = 5;
    
    if(fontUpgrade) {
      console.log('upgrading your tile cost...');
      costPerTile = 6; }
    else
      { costPerTile = 5; }
    
    var subTotal = signLength * costPerTile;
    var shipping = 7;
    
    if (signLength != 0) { shipping = 7 }
    else { shipping = 0; }
    
    var grandTotal = subTotal + shipping;
    
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
    
    retun grandTotal;
  }

/* // Create variables for the welcome message
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;


// Get the element that has an id of greeting
var el = document.getElementById("greeting");
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;
*/
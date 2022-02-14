/* Carga */

window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}




function redirectToOtherPage(url) {
    window.location.href = url;
}
$(document).ready(function () {
    $("#on").click(function(){
        $("#Cuadrado").animate({left: "500px", height: "200px", width: "200px"},5000);
});

$("#btnVerDetalles").click(function(){
       $(this).append('<span></span>')
       var top =e.pageY;
       var left =e.pageY;
       $(this).children().offset({top:top, left:left}).fadeOut(500);
});

$(".nav-link active").click(function(){
    $(this).css({"color" : "black"});
})
$("#zoom").elevatezoom({zoomType:'Lens', lenshade:'round',lensize:80});


});



    
var basePrice = +(S('#price').html().match(/\d+\.\d+/)[0]);

$(".readers").change(function() {
  newPrice = basePrice;
  $(".readers option:selected").each(function() {
    newPrice += +$(this).attr('data-price');
  });
  $("#price").html('S' + newPrice.toFixed(2));
});
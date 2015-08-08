
$(document).ready(function(){
    addDivToContainer(16);
    etching();
    $("#clear").on("click", function(){
      $(".etchblock").remove();
      var rowInput = +prompt("How many?");

      addDivToContainer(rowInput);
      etching();
    });
});
function addDivToContainer(n){

  for (var i = 0; i < n*n; i++) {
    $(".container").append("<div class='etchblock'></div>");
  }
  $(".container").css({ "width": (512) + "px"});
  $(".etchblock").css({ "width": (512/n)-2 + "px",
                        "height": (512/n)-2 + "px"});

}
function etching(){
  $(".etchblock").hover(function(){
    $(this).addClass("etching");
  }, function(){
    $(this).removeClass("etching").css({"background" : "rgb(255,0,100)"});

    var op = $(this).css("opacity");
					$(this).css("opacity", ( op > 0.1 ) ? ( op - 0.1 ) : op );
					

  });
};

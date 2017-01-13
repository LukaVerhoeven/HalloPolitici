var _HOSTING = "http://jorenvh.webhosting.be";
var counter = 0;

const funny = {
sendFunnyElement: function (text,imgURL) {
  $.ajax({
        type: "POST",
        url: _HOSTING + "/api" + "/generate-img",
        crossDomain: true,
        data: {
            "text": text,
            "image_path": imgURL
        },
        success: function (success_response) {
            console.log(_HOSTING + "/image/" +success_response);
        },
        error: function (error_response) {
            console.log(error_response);
        }
    });
  }
}


$('#FacebookPost').click(function () {
  if (counter <2) {
    counter++;
    var imgURL = $('.canvaspic').attr('src');
    var text = $('.activeBalon').text();
    funny.sendFunnyElement(text,imgURL);  }

});

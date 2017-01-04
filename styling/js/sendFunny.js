var _APILINK = "http://jorenvh.webhosting.be/api";
const app2 = {
sendFunnyElement: function (text,imgURL) {
  $.ajax({
        type: "POST",
        url: _APILINK + "/generate-img",
        crossDomain: true,
        data: {
            "text": text,
            "img": imgURL
        },
        success: function (success_response) {
            console.log(success_response);
            app.successLogin();
        },
        error: function (error_response) {
            console.log(error_response);
        }
    });
  }
}
$('#FacebookPost').click(function () {
  var imgURL = $('.canvaspic').attr('src');
  var text = $('.activeBalon').text();
  app2.sendFunnyElement(text,imgURL);
});

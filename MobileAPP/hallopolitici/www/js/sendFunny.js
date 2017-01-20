var _HOSTING = "http://jorenvh.webhosting.be";
var _UNIQUE_IMG_NAME = "";
var counter = 0;

const funny = {
    shareFunnyOnFacebook: function (text,imgURL) {
        if (counter < 1 || _UNIQUE_IMG_NAME == "") {
            $.ajax({
                type: "POST",
                url: _HOSTING + "/api/generate-img",
                crossDomain: true,
                data: {
                    "text": text,
                    "image_path": imgURL
                },
                success: function (success_response) {
                    _UNIQUE_IMG_NAME = success_response;
                    console.log(_HOSTING + "/image/" +success_response);
                    facebookConnectPlugin.showDialog({
                        method: "share",
                        href: _HOSTING + "/image/" +success_response,
                        caption: "Hallo Politici",
                        description: "Afbeelding gegenereerd met de officiële app van Hallo Politici",
                        picture: '_HOSTING + "/image/" +success_response'
                    });
                },
                error: function (error_response) {
                    console.log(error_response);
                }
            });
        }
        else {
            facebookConnectPlugin.showDialog({
                method: "share",
                href: _HOSTING + "/image/" +_UNIQUE_IMG_NAME,
                caption: "Hallo Politici",
                description: "Afbeelding gegenereerd met de officiële app van Hallo Politici",
                picture: _HOSTING + "/image/" +success_response
            });
        }
    },
    downloadFunny: function(text,imgURL) {
        if (counter < 1  || _UNIQUE_IMG_NAME == "") {
            $.ajax({
                type: "POST",
                url: _HOSTING + "/api/generate-img",
                crossDomain: true,
                data: {
                    "text": text,
                    "image_path": imgURL
                },
                success: function (success_response) {
                    _UNIQUE_IMG_NAME = success_response;
                    console.log(_HOSTING + "/image/" +success_response);
                    var anchor = document.createElement('a');
                    anchor.href = _HOSTING + "/image/" + _UNIQUE_IMG_NAME;
                    anchor.target = '_blank';
                    anchor.download = _HOSTING + "/image/" + _UNIQUE_IMG_NAME + '.png';
                    anchor.click();
                },
                error: function (error_response) {
                    console.log(error_response);
                }
            });
        }
        else {
            var anchor = document.createElement('a');
            anchor.href = _HOSTING + "/image/" + _UNIQUE_IMG_NAME;
            anchor.target = '_blank';
            anchor.download = _HOSTING + "/image/" + _UNIQUE_IMG_NAME + '.png';
            anchor.click();
        }
    }
}


$('#FacebookPost').click(function () {
    counter++;
    var imgURL = $('.canvaspic').attr('src');
    var text = $('.activeBalon').text();
    funny.shareFunnyOnFacebook(text,imgURL);

});

$('#download').click(function () {
    counter++;
    var imgURL = $('.canvaspic').attr('src');
    var text = $('.activeBalon').text();
    funny.downloadFunny(text,imgURL);

});

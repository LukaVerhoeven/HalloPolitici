/**
* jTinder initialization
*/
var slider = "#tinderslide";
var likeclass = ".like";
var dislikeclass = ".dislike";


$(slider).jTinder({
    // dislike callback
    onDislike: function (item) {

    },
    // like callback
    onLike: function (item) {
        swiping.addToLiked(item[0].attributes.dataPoliticianId.value);
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: likeclass,
    dislikeSelector: dislikeclass
});

/**
* Set button action to trigger jTinder like & dislike.
*/
$('.actions '+ likeclass + ","+ '.actions ' + dislikeclass ).click(function(e){
    e.preventDefault();
    $(slider).jTinder($(this).attr('class'));
});

function startjTinder2() {
    $("#tinderslide2").jTinder2({

        // dislike callback
        onDislike: function (item) {

        },
        // like callback
        onLike: function (item) {
            app.voteForQuestion(_USERID, item[0].attributes.dataQuestionId.value);
        },
        animationRevertSpeed: 200,
        animationSpeed: 400,
        threshold: 1,
        likeSelector: '.like',
        dislikeSelector: '.dislike'
    });

    /**
    * Set button action to trigger jTinder like & dislike.
    */
    $('.actions1 .like , .actions1 .dislike').click(function(e){
        e.preventDefault();
        console.log('jTinder2 + button');
        $("#tinderslide2").jTinder2($(this).attr('class'));
    });
}

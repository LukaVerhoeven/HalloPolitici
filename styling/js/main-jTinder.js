/**
 * jTinder initialization
 */
 var slider = "#tinderslide";
 var likeclass = ".like";
 var dislikeclass = ".dislike";


  $(slider).jTinder({

  	// dislike callback
      onDislike: function (item) {

  	    // set the status text
          $('#status').html('Dislike image ' + (item.index()+1));
      },
  	// like callback
      onLike: function (item) {
  	    // set the status text
          $('#status').html('Like image ' + (item.index()+1));
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

  $("#tinderslide2").jTinder2({

    // dislike callback
      onDislike: function (item) {

        // set the status text
          $('#status').html('Dislike image ' + (item.index()+1));
      },
    // like callback
      onLike: function (item) {
        // set the status text
          $('#status').html('Like image ' + (item.index()+1));
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
    $("#tinderslide2").jTinder2($(this).attr('class'));
  });

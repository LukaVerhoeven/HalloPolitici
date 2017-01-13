var currentStep = 1;

const steps = {
      nextStep: function(step) {
          $(".tabset--nav").css("background-image","url(img/navbar"+step+".png)");
          var val = "tab-"+step;
          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child('+step+')').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);

          $('.step').html("Step "+step);
          currentStep = step;
      },
};

//step 2
  $('.nav--item:nth-of-type(3)').on('click',  function(){
      if (currentStep == 1 && _LIKED_POLITICIAN_ARR.length > 0) {
        if (currentStep ==1) {
          currentStep++;
          steps.nextStep(String(currentStep));
        }
      }
  });

//step 3
$('.Choose').on('click', '.politicus', function(){
  if (currentStep ==2) {
    currentStep++;
    steps.nextStep(String(currentStep));
  }
});

//step4
  $('.nav--item:nth-of-type(5)').on('click',  function(){
  if (currentStep ==3) {
    currentStep++;
    steps.nextStep(String(currentStep));
  }
});

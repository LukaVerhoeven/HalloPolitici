var currentStep = 1;

const steps = {
      step1: function() {
          var val = "tab-1";
          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child(3)').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);
          navbar.css("background-image","url(img/navbar1.png)");
          step.text("Step 3");
          currentStep = 1;
      },
      step2: function() {
          var val = "tab-2";
          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child(3)').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);
          navbar.css("background-image","url(img/navbar2.png)");
          step.text("Step 3");
          currentStep = 2;
      },
      step3: function() {

          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child(3)').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);
          navbar.css("background-image","url(img/navbar3.png)");
          step.text("Step 3");
          currentStep = 3;
      },
      step4: function() {
          var val = "tab-4";
          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child(3)').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);
          navbar.css("background-image","url(img/navbar4.png)");
          step.text("Step 3");
          currentStep = 4;
      },
      nextStep: function(step) {
          var val = "tab-"+step;
          $('.nav--item').removeClass('-is--active');
          $('.nav--item:nth-child('+step+')').addClass('-is--active');
          $(".tabset--content").attr('data-active-tab', val);
          navbar.css("background-image","url(img/navbar"+step+".png)");
          step.text("Step "+step);
          currentStep = step;
      },
    };

if (currentStep == 1 && _LIKED_POLITICIAN_ARR.length > 0) {
    $('.nav--item:nth-child(2)').on('click', function(){
      console.log('tet');
        steps.nextStep(string(currentStep+1));
    });
}



$('.Choose').on('click', '.politicus', steps.step3);

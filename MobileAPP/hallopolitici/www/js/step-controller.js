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
//step 1
$('.nav--item:nth-of-type(3)').on('click', function () {
    currentStep = "1";
    steps.nextStep(String(currentStep));
});

//step 2
$('.nav--item:nth-of-type(4)').on('click',  function(){
    if (currentStep == 1 && _LIKED_POLITICIAN_ARR.length > 0) {
        if (currentStep == 1) {
            currentStep++;
            steps.nextStep(String(currentStep));
            swiping.toggleArrowOnStep(2);
        }
    }
    if ( currentStep > 2 ) {
        currentStep = "2";
        steps.nextStep(String(currentStep));
        // swiping.toggleArrowOnStep(2);
    }
});

//step 3
$('.Choose').on('click', '.politicus', function(){
    if (currentStep == 2) {
        currentStep++;
        steps.nextStep(String(currentStep));
    }
    var selectedItem = $(this).index()-1;
    $('.canvaspic').attr('src','img/politicians/'+ _LIKED_POLITICIAN_ARR[selectedItem][0].afbeelding);
});

//step4
$('.nav--item:nth-of-type(6)').on('click',  function(){
    if (currentStep == 3) {
        currentStep++;
        steps.nextStep(String(currentStep));
        swiping.toggleArrowOnStep(4);
        console.log($(".replay").removeClass("hide"));
        $(".replay").removeClass("hide");
        swiping.addTextBalloon(_ALL_TEXT);
        swal({
            title: "Bedankt!",
            text: "Bedankt voor het gebruiken van onze applicatie. Wenst u meer info, of de antwoorden die de politici gaven op deze vragen? Neem dan zeker eens een kijkje op <span style='color:#F8BB86'>hallopolitici.be<span>",
            type: "info",
            showCancelButton: true,
            html:true,
            confirmButtonColor: "#2ecc71",
            confirmButtonText: "Ga naar de website",
            cancelButtonText: "Ga terug",
            closeOnConfirm: false,
            closeOnCancel: true
        },
        function(isConfirm){
            if (isConfirm) {
                window.open('http://www.hallopolitici.be', '_system');
            }
        });
    }
});

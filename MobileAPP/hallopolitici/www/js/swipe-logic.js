// Global variables
var _CURRENT_STEP    = 1;
var _NAV_BAR         = document.querySelector('nav');
var _POLITICIAN_ID   = null;
var _ALL_POLITICIANS = JSON.parse(localStorage.getItem(4));
var _QUESTION_ID     = null;
var _TINDER_SLIDE$   = $("#tinderslide ul");

const swiping = {
    initialize: function () {
        _CURRENT_STEP = 1; // double check on current step set to 1
        if(_NAV_BAR !== null) {
            swiping.bindEvents();
        }
        swiping.addPoliticianCards();
    },
    bindEvents: function () {
        _NAV_BAR.addEventListener('click', function ($event) {
            console.log($event);
        });
    },
    addPoliticianCards: function () {
        // for (i=0; i<10; i++ ) {
        //     _TINDER_SLIDE$.append(
        //         `<li class="pane">
        //             <div>` + item.voornaam + ` ` + item.familienaam + `</div>
        //             <p class="partij">` + item.partijnaam.naam + `</p>
        //             <img src="/img/politicians/` + item.id + '/' + item.afbeelding + `" alt="`+ item.voornaam + `_` + item.familienaam +`">
        //             <div class="like"></div>
        //             <div class="dislike"></div>
        //         </li>`
        //     );
        // }
    },
    swipeCall: function (currentStep, userID, questionID, politicianID) {

    }
};

swiping.initialize();

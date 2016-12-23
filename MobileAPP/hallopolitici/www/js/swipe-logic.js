// Global variables
var _CURRENT_STEP = 1;
var _NAV_BAR = document.querySelector('nav');
var _POLITICIAN_ID = null;
var _QUESTION_ID = null;

const swiping = {
    initialize: function () {
        _CURRENT_STEP = 1; // double check on current step set to 1
        if(_NAV_BAR !== null) {
            swiping.bindEvents();
        }
    },
    bindEvents: function () {
        _NAV_BAR.addEventListener('click', function ($event) {
            console.log($event);
        });
    },
    swipeCall: function (currentStep, userID, questionID, politicianID) {
        
    }
};

swiping.initialize();

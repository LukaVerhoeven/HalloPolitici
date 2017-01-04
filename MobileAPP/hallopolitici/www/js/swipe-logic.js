// Global variables
var _CURRENT_STEP         = 1;
var _NAV_BAR              = document.querySelector('nav');
var _POLITICIAN_ID        = null;
var _LIKED_POLITICIAN_ID  = [];
var _LIKED_POLITICIAN_ARR = [];
var _ALL_POLITICIANS      = JSON.parse(localStorage.getItem(4));
var _QUESTION_ID          = null;

//jQuery vars
var _TINDER_SLIDE$    = $("#tinderslide ul");
var _PICK_POLITICIAN$ = $("#pick_politician");

const swiping = {
    initialize: function () {
        _CURRENT_STEP = 1; // double check on current step set to 1
        if(_NAV_BAR !== null) {
            swiping.bindEvents();
        }
        swiping.shuffleArray(_ALL_POLITICIANS);
    },
    bindEvents: function () {
        _NAV_BAR.addEventListener('click', function ($event) {
            console.log($event);
        });
    },
    shuffleArray: function (a, callback) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        swiping.addPoliticianCards();
    },
    addPoliticianCards: function () {
        for(i=0; i <= 15; i++){
            _TINDER_SLIDE$.append(
                `<li class="pane" dataPoliticianId="` + _ALL_POLITICIANS[i].id + `">
                    <h3>` + _ALL_POLITICIANS[i].voornaam + ` ` + _ALL_POLITICIANS[i].familienaam + `</h3>
                    <p class="partij">` + _ALL_POLITICIANS[i].partijnaam.naam + `</p>
                    <img src="/img/politicians/` + _ALL_POLITICIANS[i].afbeelding + `">
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>`
            );
        };
    },
    addSelectedPoliticianCards: function () {
        _LIKED_POLITICIAN_ARR = [];

        _LIKED_POLITICIAN_ID.forEach(function(item) {
            _LIKED_POLITICIAN_ARR.push(_ALL_POLITICIANS.filter(function( obj ) {
                return obj.id === item;
            }));
        });

        var lengthArr = _LIKED_POLITICIAN_ARR.length;

        _PICK_POLITICIAN$.append(
            `<div class="politicus">
                <img src="img/politicians/` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].afbeelding + `">
                <p>` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].voornaam + ` ` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].familienaam + `</p>
                <p class="partij">` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].partijnaam.naam + `</p>
            </div>`
        );

    },
    addToLiked: function (politicianID) {
        _LIKED_POLITICIAN_ID.push(parseInt(politicianID));

        swiping.addSelectedPoliticianCards();
    }
};

swiping.initialize();

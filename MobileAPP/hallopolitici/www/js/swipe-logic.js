// Global variables
var _CURRENT_STEP         = 1;
var _NAV_BAR              = document.querySelector('nav');
var _POLITICIAN_ID        = null;
var _LIKED_POLITICIAN_ID  = [];
var _LIKED_POLITICIAN_ARR = [];
var _ALL_POLITICIANS      = JSON.parse(localStorage.getItem(4));
var _QUESTION_ID          = null;

//jQuery vars
var _TINDER_SLIDE$     = $("#tinderslide ul");
var _TINDER_SLIDE2$    = $("#tinderslide2 ul");
var _BOX$              = $(".box");
var _PICK_POLITICIAN$  = $("#pick_politician");
var _BUTTON_FULLVRAAG$ = $("div.vraagtext #js-button-fullvraag");

const swiping = {
    initialize: function () {
        swiping.bindEvents();
        swiping.addPoliticianCards();
    },
    bindEvents: function () {

    },
    addToLiked: function (politicianID) {
        _LIKED_POLITICIAN_ID.push(parseInt(politicianID));
        swiping.addSelectedPoliticianCards();
        if(_LIKED_POLITICIAN_ARR.length == 1) {
            swiping.toggleArrowOnStep(2);
        }
    },
    addPoliticianCards: function () {
        for(i=0; i < _ALL_POLITICIANS.length; i++){
            _TINDER_SLIDE$.append(
                `<li class="pane" dataPoliticianId="` + _ALL_POLITICIANS[i].id + `">
                    <h3>` + _ALL_POLITICIANS[i].voornaam + ` ` + _ALL_POLITICIANS[i].familienaam + `</h3>
                    <p class="partij">` + _ALL_POLITICIANS[i].partijnaam.naam + `</p>
                    <span style="margin:auto; display: block; width:135px; height: 180px; position: relative; overflow:hidden;">
                        <img style="width:100%; position: absolute; top: 50%; left: 50%; transform:translate(-50%, -50%); max-width:100%; margin: 0;" src="/img/politicians/` + _ALL_POLITICIANS[i].afbeelding + `">
                    </span>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>`
            );
        };
    },
    addSelectedPoliticianCards: function () {
        _LIKED_POLITICIAN_ARR = [];

        _LIKED_POLITICIAN_ID.forEach(function(item) {
            _LIKED_POLITICIAN_ARR.push(_ALL_POLITICIANS.filter(function (obj) {
                return obj.id === item;
            }));
        });

        var lengthArr = _LIKED_POLITICIAN_ARR.length;

        _PICK_POLITICIAN$.append(
            `<div style="display:flex; justify-content:space-between; align-items:center;" class="politicus" onclick="app.getPoliticianQuestions(` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].id + `)">
                <span style="overflow:hidden; width:34.78260869565217%; height: 80px; position: relative; display: inline-block;">
                    <img style="width:100%; position: absolute; top:50%; left: 50%; transform:translate(-50%, -50%);" src="img/politicians/` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].afbeelding + `">
                </span>
                <span style="text-align: center; width:65.21739130434783%;">
                    <p style="width: 100%; padding: 5px; margin: 0px;">` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].voornaam + ` ` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].familienaam + `</p>
                    <p style="width: 100%; padding: 5px;" class="partij">` + _LIKED_POLITICIAN_ARR[lengthArr-1][0].partijnaam.naam + `</p>
                </span>
            </div>`
        );
    },
    addQuestionsForPoliticians: function (res) {
        if ( res === "success" ) {
            _POLITICIAN_QUESTIONS.forEach(function (item, key) {
                key = _POLITICIAN_QUESTIONS.length - key;
                _TINDER_SLIDE2$.append(
                    `<li class="pane" dataQuestionId=`+ item[0].vraag.id +`>
                        <div class="title-vraag">Vraag` + key + `</div>
                        <div class="vraagtext">
                            ` + item[0].vraag.korte_vraag + `
                            <button id="js-button-fullvraag" onclick="swiping.showExtendedQuestion(` + item[0].vraag.id +`)">Lees meer</button>
                        </div>
                    </li>`
                );
                _BOX$.append(
                    `<div class="fullvraag hidden" dataQuestionId=` + item[0].vraag.id + `><span id="close-btn" onclick="swiping.showExtendedQuestion(` + item[0].vraag.id +`)">X</span><p class="long-question hide-text">` + item[0].vraag.lange_vraag + `</p></div>`
                );
            });
            startjTinder2();
        }
        else if ( res === "error" ) {
            _TINDER_SLIDE2$.append(
                `<li class="pane">
                    <div></div>
                    <div class="vraagtext">
                        Geen vragen meer voor deze politicus...
                    </div>
                </li>`
            );
        }
    },
    showExtendedQuestion: function (questionID) {
        $(".fullvraag[dataQuestionId="+ questionID +"]").toggleClass('hidden show');
        if ( $(".fullvraag[dataQuestionId="+ questionID +"]").hasClass('show')) {
            console.log('if test');
            setTimeout(function () {
                console.log('if test timeout');
                $(".fullvraag[dataQuestionId="+ questionID +"] .long-question").toggleClass('hide-text');
            }, 500);
        }
        else {
            console.log('else test');
            $(".fullvraag[dataQuestionId="+ questionID +"] .long-question").toggleClass('hide-text');
        }
    },
    toggleArrowOnStep: function (step) {
        /*1e:-40vw     2e:-16vw    3e:11vw    4e:36vw*/
        var marginValues = [-40, -16, 11, 36];
        $(".arrow").toggle().css("margin-left", marginValues[step-1] + "vw");
    }
};

swiping.initialize();

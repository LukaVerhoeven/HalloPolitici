/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


// Global variables
var _USERID = null;
var _USERNAME = null;
var _LOGINBTN = null;
var _NOLOGINBTN = null;
var _ISLOGGEDIN = 0;
var _APILINK = "http://jorenvh.webhosting.be/api";
var _ALL_POLITICIANS = [];
var _POLITICIAN_QUESTIONS = [];
var _FIRST_QUESTION_LIKED = false;


// Application module
const app = {
        // Application Constructor
        initialize: function() {
            this.getButtons();
            this.getAllPoliticians();

            if (localStorage.getItem(2) === "1") {
                app.getTextBalloon(1);
            }
            else {
                app.getTextBalloon(0);
            }

            this.bindEvents();
        },
        getButtons: function () {
            // Get login button
            try {
                _LOGINBTN = document.querySelector("#loginFB");
                _NOLOGINBTN = document.querySelector('#noLogin');
            }
            catch (error){
                console.log(error);
            }
        },
        bindEvents: function () {
            // Bind device ready event to app
            document.addEventListener('deviceready', this.onDeviceReady, false);
            // Bind click event to login button
            if(_LOGINBTN !== null) {
                _LOGINBTN.addEventListener('click', function () {
                    app.faceBookLogin();
                });
            }

            if(_NOLOGINBTN !== null) {
                _NOLOGINBTN.addEventListener('click', function () {
                    localStorage.removeItem(0);
                    localStorage.removeItem(1);
                    localStorage.setItem(2, "0");
                });
            }
        },
        checkIfLoggedIn: function () {
            // check if logged in, in global variable
            if (localStorage.getItem(2) === "1" && (window.location.pathname === "index.html" || window.location.pathname === "/")) {
                window.location = "steps.html";
            }
        },
        fbLoginSuccess: function (userData) {
            // Debug the userID if it exists and get user name
            if(userData.authResponse) {
                // Get user id from the JSON response
                _USERID = userData.authResponse.userID;
                _ISLOGGEDIN = 1;
                // Get user name from facebook id
                facebookConnectPlugin.api('/me', null, app.getFbUserName);
                this.getTextBalloon(_ISLOGGEDIN);
            }
            else{
                alert('error happend while logging in')
            }

            // Check if userid is set local and send user id to back-end
            if((_USERID !== null && _USERNAME !== null) || (_USERID !== undefined && _USERNAME !== undefined)) {
                app.sendFbIdAndName(); // Ajax call to back-end with userID and username that are stored in global _USERID _USERNAME
            }

            // Set user id in local storage
            //var userID = window.localStorage.key(0);
            window.localStorage.setItem(0, _USERID);
            //var isLoggedIn = window.localStorage.key(2);
            window.localStorage.setItem(2, _ISLOGGEDIN);
        },
        getFbUserName: function (response) {
            _USERNAME = response.name; // Put username in global _USERNAME

            var username = window.localStorage.key(1);
            window.localStorage.setItem(1, _USERNAME);

        },
        faceBookLogin: function() {
            // Facebook API call for login
            facebookConnectPlugin.login(["public_profile"],
            app.fbLoginSuccess,
            function (error_response) {
                alert("" + error_response)
            }
        );
    },
    sendFbIdAndName: function () {
        $.ajax({
            type: "POST",
            url: _APILINK + "/login",
            crossDomain: true,
            data: {
                "userID": _USERID,
                "username": _USERNAME
            },
            success: function (success_response) {
                console.log(success_response);
                app.successLogin();
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    },
    successLogin: function () {
        window.location = "steps.html";
    },
    onDeviceReady: function() {
        // Debug device ready event in console
        console.log('device is ready');
        // check if logged in
        if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
            app.checkIfLoggedIn();
        }

    },
    getAllPoliticians: function () {
        $.ajax({
            type: "GET",
            url: _APILINK + "/politici/all",
            dataType: "json",
            success: function (success_response) {
                _ALL_POLITICIANS = success_response;
                window.localStorage.setItem(4, JSON.stringify(_ALL_POLITICIANS));
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    },
    getPoliticianQuestions: function (politicianID) {
        $.ajax({
            type: "POST",
            url: _APILINK + "/politici/vragen",
            dataType: "json",
            data: {
                "polID": politicianID,
                "userID": localStorage.getItem(0)
            },
            success: function (success_response) {
                _POLITICIAN_QUESTIONS = success_response;
                swiping.addQuestionsForPoliticians('success');
                //#sorrydries #moestvanjoren #navigatie
                $('div.politicus').on('click', function () {
                    var val =3;
                    $('.nav--item').removeClass('-is--active');
                    $('.nav--item:nth-child(3)').addClass('-is--active');
                    $(".tabset--content").attr('data-active-tab', val);
                    console.log('test');
                });
            },
            error: function (error_response) {
                swiping.addQuestionsForPoliticians('error');
            }
        });
    },
    voteForQuestion: function (userID, questionID) {
        _FIRST_QUESTION_LIKED = true;
        swiping.toggleArrowOnStep(4);
        $.ajax({
            type: "POST",
            url: _APILINK + "/politici/vragen/vote",
            dataType: "json",
            data: {
                "userID": userID,
                "questionID": questionID
            },
            success: function (success_response) {
                console.log(success_response);
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    },
    getTextBalloon: function (isLoggedIn) {
        console.log('get text balloon');
        $.ajax({
            type: "POST",
            url: _APILINK + "/text-ballon",
            dataType: "json",
            data: {
                'isLoggedIn': isLoggedIn
            },
            success: function (success_response) {
                console.log("success", success_response);
            },
            error: function (error_response) {
                console.log("error", error_response);
            }
        });
    }
};

// Start app
app.initialize();

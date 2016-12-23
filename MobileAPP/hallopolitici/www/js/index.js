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
var _USERID;
var _LOGINBTN;
var _APILINK = "http://jorenvh.webhosting.be/api";

// Application module
var app = {
    // Application Constructor
    initialize: function() {
        this.getButtons();
        //this.faceBookLogin();
        this.bindEvents();
    },
    getButtons: function () {
        // Get login button
        _LOGINBTN = document.querySelector("#loginBtn");
    },
    bindEvents: function() {
        // Bind device ready event to app
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // Bind click event to login button
        _LOGINBTN.addEventListener('click', function () {
            this.getLikedPolitici(23276860567);
        });
    },
    fbLoginSuccess: function (userData) {
        // Debug the userID if it exists
        if(userData.authResponse.userID) {
            console.log(userData.authResponse.userID);
        }
        else{
            console.log('no user id');
        }

        // Get user id from the JSON response
        _USERID = userData.authResponse.userID;

        // Set user id in local storage
        var userID = window.localStorage.key(0);
        window.localStorage.setItem(0, _USERID);
    },
    faceBookLogin: function() {
        // Facebook API call for login
        facebookConnectPlugin.login(["public_profile", "email"],
            app.fbLoginSuccess,
            function (error_response) {
                alert("" + error_response)
            }
        );
    },
    onDeviceReady: function() {
        // Debug device ready event in console
        console.log('device is ready');
    },
    swipedPolitici: function (userID, politicusID, hasLiked) {
        $.ajax({
            type: "POST",
            url: _APILINK + "/politici/vote",
            dataType: "json",
            crossDomain: true,
            data: {
                "userID":       userID,
                "politicusID":  politicusID,
                "hasLiked":     hasLiked
            },
            success: function (success_response) {
                console.log(success_response);
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    },
    getAllPolitici: function (userID) {
        $.ajax({
            type: "POST",
            url: _APILINK + "/politici/all",
            dataType: "json",
            crossDomain: true,
            data: {
                "userID": userID
            },
            success: function (success_response) {
                console.log(success_response);
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    }
};

// Start app
app.initialize();

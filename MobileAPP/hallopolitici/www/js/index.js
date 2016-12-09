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

var _USERID;
var _LOGINBTN;

var app = {
    // Application Constructor
    initialize: function() {
        this.getButtons();
        this.bindEvents();
    },
    getButtons: function () {
        _LOGINBTN = document.querySelector("#loginBtn");
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        _LOGINBTN.addEventListener('click', function () {
            app.faceBookLogin();
        });
    },
    fbLoginSuccess: function (userData) {
        // debug the userID if it exists
        if(userData.authResponse.userID) {
            console.log(userData.authResponse.userID);
        }
        else{
            console.log('no user id');
        }

        // get user id from api call to facebook
        _USERID = userData.authResponse.userID;

        // set user id in local storage
        var userID = window.localStorage.key(0);
        window.localStorage.setItem(0, _USERID);
    },
    faceBookLogin: function() {
        facebookConnectPlugin.login(["public_profile", "email"],
            app.fbLoginSuccess,
            function (error_response) {
                alert("" + error_response)
            }
        );
    },
    onDeviceReady: function() {
        console.log('device is ready');
    }
};

app.initialize();

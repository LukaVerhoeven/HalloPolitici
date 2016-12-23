<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::post('login', 'LoginController@login'); //inloggen

//Stap 1 alle politici ophalen
Route::get('politici/all', 'Step1Controller@getStartingPolitici'); //alle politici ophalen in random order
//Route::post('politici/vote', 'Step1Controller@voteForPoliticus');
//post route => liked/disliked politici in db opslaan => user (fb id?) linken met politicus id en bolean hasLiked op true of false

// Stap 2 politici tonen dat je geliked hebt.
//Route::post('politici/liked', 'Step2Controller@getLikedPolitici'); //politicus ophalen op id

//Stap 3 vragen
Route::post('politici/vragen', 'Step3Controller@getPoliticusVragen');
Route::post('politici/vragen/vote', 'Step3Controller@stemVoorVraag');

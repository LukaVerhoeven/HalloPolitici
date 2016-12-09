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

//Stap 1 alle politici ophalen
Route::get('politici/all', 'Step1Controller@getStartingPolitici'); //alle politici ophalen in random order
//post route => liked/disliked politici in db opslaan => user (fb id?) linken met politicus id en bolean hasLiked op true of false

// Stap 2 politici tonen dat je geliked hebt.
Route::get('politici/{id}', 'Step2Controller@getPoliticusWithId'); //politicus ophalen op id

//Stap 3 vragen
Route::get('politici/{id}/vragen', 'Step3Controller@getPoliticusVragen');

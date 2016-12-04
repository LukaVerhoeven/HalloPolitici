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

//politici
Route::get('politici/all', 'ApiController@getStartingPolitici'); //alle politici ophalen in random order
//Route::get('politici/{id}', 'ApiController@getnextPoliticus'); //politicus ophalen op id

//vragen
Route::get('politici/{id}/vragen', 'ApiController@getPoliticusVragen');

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('image/{id}', 'Step4Controller@getImage');

Route::get('/home', 'HomeController@index');
Route::get('/text/new', 'HomeController@newText');
Route::post('/text/new', 'HomeController@postNewText');
Route::get('/text/edit/{id}', 'HomeController@editText');
Route::post('/text/edit/{id}', 'HomeController@postEditText');
Route::get('/text/delete/{id}', 'HomeController@deleteText');

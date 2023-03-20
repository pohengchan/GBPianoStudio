<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('users', [AuthController::class, 'Register']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', 'App\Http\Controllers\Api\UsersController@index');
Route::get('users/{user}', 'App\Http\Controllers\Api\UsersController@show');
Route::post('users','App\Http\Controllers\Api\UsersController@store');
Route::put('users/{user}','App\Http\Controllers\Api\UsersController@update');
Route::delete('users/{user}', 'App\Http\Controllers\Api\UsersController@delete');
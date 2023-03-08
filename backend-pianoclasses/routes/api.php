<?php
// use App\Models\Product;
use App\Http\Controllers\Api\ProductsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/** 
** Basic Routes for a RESTful service: 
** 
** Route::get($uri, $callback); 
** Route::post($uri, $callback); 
** Route::put($uri, $callback); 
** Route::delete($uri, $callback); 
** 
**/

Route::get('products', 'App\Http\Controllers\Api\ProductsController@index');
Route::get('products/{product}', 'App\Http\Controllers\Api\ProductsController@show');
Route::post('products','App\Http\Controllers\Api\ProductsController@store');
Route::put('products/{product}','App\Http\Controllers\Api\ProductsController@update');
Route::delete('products/{product}', 'App\Http\Controllers\Api\ProductsController@delete');

Route::get('users', 'App\Http\Controllers\Api\UsersController@index');
Route::get('users/{user}', 'App\Http\Controllers\Api\UsersController@show');
Route::post('users','App\Http\Controllers\Api\UsersController@store');
Route::put('users/{user}','App\Http\Controllers\Api\UsersController@update');
Route::delete('users/{user}', 'App\Http\Controllers\Api\UsersController@delete');

// Route::get('products', function () {
//     //return response(['Product 1', 'Product 2', 'Product 3'],200);
//     return response(Product::all(),200);
// });
// Route::get('products/{product}', function ($productId) {
//     //return response()->json(['productId' => "{$productId}"], 200);
//     return response(Product::find($productId), 200);
// });
 
// // Route::post('products', function() {
// //     return  response()->json([
// //             'message' => 'Create success'
// //         ], 201);
// // });
// Route::post('products', function(Request $request) {
//     $resp = Product::create($request->all());
//      return $resp;
//  });


// // Route::put('products/{product}', function() {
// // 	return  response()->json([
// //             'message' => 'Update success'
// //         ], 200);
// // });
// Route::put('products/{product}', function(Request $request, $productId) {
//     $product = Product::findOrFail($productId);
//     $product->update($request->all());
//     return $product;
// });

// // Route::delete('products/{product}',function() {
// // 	return  response()->json(null, 204);
// // });
// Route::delete('products/{product}',function($productId) {
// 	Product::find($productId)->delete();
//     return 204;
// });
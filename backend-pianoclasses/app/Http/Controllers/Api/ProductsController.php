<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index()
	{
        $products = Product::all();
	    return $products;
	}
	public function show(Product $product)
	{
	    return $product;
	}
	public function store(Request $request)
	{
	    $product = Product::create($request->all());
	    return response()->json($product, 201);
	}
	public function update(Request $request, Product $product)
	{
	    $product->update($request->all());
	    return response()->json($product, 200);
	}
	public function delete(Product $product)
	{
	    $product->delete();
	    return response()->json(null, 204);
	}
}

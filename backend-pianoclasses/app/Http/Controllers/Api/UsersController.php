<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function index()
	{
	    return User::all();
	}
	public function show(User $user)
	{
	    return $user;
	}
	public function store(Request $request)
	{
	    $user = User::create($request->all());
	    return response()->json($user, 201);
	}
	public function update(Request $request, User $user)
	{
	    $user->update($request->all());
	    return response()->json($user, 200);
	}
	public function delete(User $user)
	{
	    $user->delete();
	    return response()->json(null, 204);
	}

	public function setIsAuthorized(Request $request, User $user)
	{
		User::where('id', $user->id)->update(['is_authorised' => 1]);
		$user = User::find($user->id);
		return response()->json($user, 200);
	}
}

<?php

namespace App\Http\Controllers\Api;

use App\Models\User; 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Validator; 

class AuthController extends Controller
{
   public function register(Request $request)
   {
    $validator = Validator::make($request->all(),[
        'contact_name' => 'required',
        'email' => 'required| max:191 |unique:users,email',
        'phone_number' => 'required',
        'student_name' => 'required',
        'date_of_birth' => 'required',
        'password' => 'required| min: 8',
       
    ]);
 if($validator->fails())
 {
    return response()->json([
    'validation_errors'=>$validator->messages(),
    ]);
 }
 else {
    $user = User::create([
        'contact_name'=>$request->contact_name, 
        'email' => $request->email,
        'phone_number' => $request->phone_number,
        'student_name' => $request->student_name,
        'date_of_birth' => $request->date_of_birth,
        'password' => Hash::make($request->password),

       
    ]);
    $token = $user->createToken($user->email.'_Token')->plainTextToken;

    return response()->json([
        'status'=>200,
        'contact_name'=>$user->contact_name,
        'token'=>$token,
        'message'=>'Registered successfully, please check your email for the confirmation.',
        ]);
 }  
}

}

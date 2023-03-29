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


public function login(Request $request) 
{
    $validator = Validator::make($request->all(), [
        'email'=>'required|email|max:191',
        'password'=>'required',
    ]);

    if($validator->fails())
 {
    return response()->json([
    'validation_errors'=>$validator->messages(),
    ]);
 }
 else {

        $user = User::where ('email', $request->email)->first();
        if(! $user || ! Hash::check($request->password, $user->password))
            {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid Credentials',
                ]);
            }
        else
            {
                if($user->is_authorised ===1) //checks if user is authorised
                {
                    $role = 'authorised';
                    $token = $user->createToken($user->email.'_Token', [''])->plainTextToken;
                }

                if($user->is_admin === 1) //1= Admin
                {
                    $role = 'admin';
                    $token = $user->createToken($user->email.'_AdminToken', ['server:admin'])->plainTextToken;
                }

                return response()->json([
                    'status'=>200,
                    'username'=>$user->contact_name,
                    'token'=>$token,
                    'message'=>'Logged In Successfully',
                    'role'=>$role,
                    'studentname'=>$user->student_name,
                    'userid'=>$user->id,
                ]);
                //{status: 200, username: null, token: '24|ytQkhsMsgxyg0I56wMDXALAVVWFyRXQb9Mzo6Voe', message: 'Logged In Successfully', role: ''}
            }
      }
    }



public function logout()
{
    auth()->user()->tokens()->delete();
    return response()->json([
        'status'=> 200,
        'message' => 'Logged Out Successfully'
    ]);
}
}
<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorizerUserController extends Controller
{
    public function authorizeUser(Request $request, $userId)
    {
        // Verifica si el usuario existe
        $user = User::find($userId);
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 403);
        }

        // Valida los datos de entrada
        $validator = Validator::make($request->all(), [
            'authorized' => 'required|boolean'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 403);
        }

        // Actualiza la información del usuario
        $authorized = $request->input('authorized');
        $user->is_authorised = $authorized;
        $user->save();

        return response()->json([
            'success' => true,
            'message' => $authorized ? 'User has been authorized' : 'User has been deauthorized'
        ]);
    }
}

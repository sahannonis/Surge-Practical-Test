<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    function register(Request $req){
        $user = new User;
        $user->name = $req->input('name');
        $user->username = $req->input('username');
        $user->email = $req->input('email');
        $user-> password = $req->input('password');
        $user->save();
        return $user;
    }
    //
    function login(Request $req){
        $user = new User;
        $user = User::where('username',$req->username)->first();
        $user = User::where('password',$req->password)->first();
      
        return $user;
    }

    function showprofile($username){
        $user = User::where('username', $username)->first();
        return response()->json(['users'=>$user],200);
    }

    function update(Request $req){
        $user=User::find($req->id);
        $user->name=$req->name;
        $user->password=$req->password;
        $result = $user->save();
        if($result){
            return["result"=>"Data Updated"];
        }
        else
        {
            return["result"=>"Data failed to update"];
        }
    }
}

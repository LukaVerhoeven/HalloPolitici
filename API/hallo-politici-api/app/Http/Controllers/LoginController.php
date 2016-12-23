<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\App_Gebruiker;
use App\Gebruiker;

class LoginController extends Controller
{
    protected function login(Request $request){
        $facebookID = $request->userID;
        $naam = $request->username;
        $existingUser = Gebruiker::where('facebook_id', $facebookID)->first();
        $existingAppUser = App_Gebruiker::where('fb_id', $facebookID)->first();

        if(count($existingUser) == 0 && count($existingAppUser) == 0) {
            //make new user
            App_Gebruiker::create([
                'fb_id' => $facebookID,
                'naam' => $naam
            ]);
        }
        else if(count($existingUser) > 0 && count($existingAppUser) == 0) {
            App_Gebruiker::create([
                'fb_id' => $facebookID,
                'gebruiker_id' => $existingUser->id,
                'naam' => $naam
            ]);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;
use App\Politicus_stem;

class Step2Controller extends Controller
{
    protected function getLikedPolitici(Request $request){
        $userID = $request->userID;
        dd($userID);
        try {
            $likedPolitici = Politicus_stem::where('gebruiker_id', $userID)->with('politicus')->where("hasLiked", true)->get();
        } catch (\Exception $e) {
            return $e;
        }

        return $likedPolitici;
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vraag_antwoord;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Vraag_stem;
use App\App_Gebruiker;

class Step3Controller extends Controller
{
    protected function getPoliticusVragen(Request $request){
        $pol_id = $request->polID;

        $vragen = Vraag_antwoord::where('politicus_id', $pol_id)->has('vraag')->with('vraag')->get();
        $vragen_met_alle_politici = [];

        foreach ($vragen as $vraag) {
            $politici_met_vraag = Vraag_antwoord::where('vraag_id', $vraag->vraag_id)->with('politicus')->select('vraag_id', 'politicus_id', 'kort_antwoord')->with('vraag')->get();

            array_push($vragen_met_alle_politici, $politici_met_vraag);
        }

        if(empty($vragen_met_alle_politici)){
            return "Politicus heeft geen vragen";
        }

        //return hier ook $vragen_met_alle_politici
        return $vragen_met_alle_politici;

    }

    protected function stemVoorVraag(Request $request){
        $fb_id = $request->userID;
        $vraag_id = $request->questionID;

        $user = App_Gebruiker::where('fb_id', $fb_id)->first();

        if($user != null){
            //$existing_vote = Vraag_stem::where('vraag_id', $vraag_id)->where('vote_normal', 1)->orWhere('fb_id', $fb_id)->orWhere('gebruiker_id', $user->gebruiker_id)->first();

            $existing_vote = Vraag_stem::where(function ($query) use($vraag_id) {
                $query->where('vraag_id', $vraag_id)
                ->where('vote_normal', 1);
            })->where(function($query) use($fb_id, $user) {
                $query->where('fb_id', $fb_id)
                ->orWhere('gebruiker_id', $user->gebruiker_id);
            })->get();

            if (count($existing_vote) == 0) {
                //create new vote
                if($user->gebruiker_id != null){
                    Vraag_stem::create([
                        'vraag_id' => $vraag_id,
                        'fb_id' => $fb_id,
                        'vote_normal' => 1,
                        'gebruiker_id' => $user->gebruiker_id
                    ]);
                }
                else {
                    Vraag_stem::create([
                        'vraag_id' => $vraag_id,
                        'fb_id' => $fb_id,
                        'vote_normal' => 1
                    ]);
                }

            }
            else {
                return "user already voted for question";
            }
        }
        else {
            return 'user does not exist';
        }
    }
}

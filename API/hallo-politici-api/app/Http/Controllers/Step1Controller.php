<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;
use App\Politicus_stem;


class Step1Controller extends Controller
{
    //enkel politici met vragen
    protected function getStartingPolitici(){
        $politici = Politicus::has('vragen')->with('partijnaam')->inRandomOrder()->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id')->get();
        //enkel politici tonen die vragen hebben
        //foreign key altijd mee selecteren => in model ook id(primary key) altijd selecteren, anders kan relatie niet gelegd worden #Lost3HoursOfWorkBecauseOfThisSh*t
        return $politici;
    }

    protected function voteForPoliticus($politicusID, $userID, $hasLiked){
        $vote = Politicus_stem::where("gebruiker_id", $userID)->where("politicus_id", $politicus_id)->first();

        if(!empty($vote)){
            $new_vote = Politicus_stem::create([
                "gebruiker_id" => $userID,
                "politicus_id" => $politicusID,
                "hasLiked" => $hasLiked
            ]);
        }
        else {
            return "gebruiker heeft al gestemd op deze politicus";
        }
        return;
    }

}

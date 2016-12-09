<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;


class Step1Controller extends Controller
{
    //enkel politici met vragen
    protected function getStartingPolitici(){
        $politici = Politicus::has('vragen')->with('partijnaam')->inRandomOrder()->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id')->get();
        //enkel politici tonen die vragen hebben
        //foreign key altijd mee selecteren => in model ook id(primary key) altijd selecteren, anders kan relatie niet gelegd worden #Lost3HoursOfWorkBecauseOfThisSh*t
        return $politici;
    }

}

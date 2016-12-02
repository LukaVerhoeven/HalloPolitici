<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;
use App\Partij;

class ApiController extends Controller
{
    protected function getStartingPolitici(){
        $politici = Politicus::with('partijnaam')->inRandomOrder()->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id')->get();
        //foreign key altijd mee selecteren => in model ook id(primary key) altijd selecteren, anders kan relatie niet gelegd worden #Lost3HoursOfWorkBecauseOfThisSh*t
        dd($politici[0]);
    }
}

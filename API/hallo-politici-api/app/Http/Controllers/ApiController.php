<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;
use App\Partij;
use App\Vraag;
use App\Vraag_antwoord;

class ApiController extends Controller
{
    //enkel politici met vragen
    protected function getStartingPolitici(){
        $politici = Politicus::has('vragen')->with('partijnaam')->inRandomOrder()->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id')->get();
        //foreign key altijd mee selecteren => in model ook id(primary key) altijd selecteren, anders kan relatie niet gelegd worden #Lost3HoursOfWorkBecauseOfThisSh*t
        //dd($politici[0]);
        return $politici;
    }

    protected function getPoliticusVragen($id){
        try {
            $politici = Vraag_antwoord::where('politicus_id', $id)->has('vraag')->with('vraag')->get();
            dd($politici);

        } catch (\Exception $e) {
            return "Politicus heeft geen vragen";
        }

    }
}

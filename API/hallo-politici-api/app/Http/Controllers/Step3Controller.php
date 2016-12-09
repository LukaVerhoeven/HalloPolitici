<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vraag_antwoord;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Step3Controller extends Controller
{
    protected function getPoliticusVragen($id){

            $vragen = Vraag_antwoord::where('politicus_id', $id)->has('vraag')->with('vraag')->get();
            $vragen_met_alle_politici = [];

            foreach ($vragen as $vraag) {
                $politici_met_vraag = Vraag_antwoord::where('vraag_id', $vraag->vraag_id)->with('politicus')->select('vraag_id', 'politicus_id', 'kort_antwoord')->with('vraag')->get();
                array_push($vragen_met_alle_politici, [$vraag->vraag_id => $politici_met_vraag]);
            }

            dd($vragen_met_alle_politici);

            if(empty($vragen)){
                return "Politicus heeft geen vragen";
            }

        //return hier ook $vragen_met_alle_politici
        return $vragen;

    }
}

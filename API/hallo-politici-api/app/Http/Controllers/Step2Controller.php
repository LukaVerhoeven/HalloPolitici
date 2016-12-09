<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;

class Step2Controller extends Controller
{
    protected function getPoliticusWithId($id){
        try {
            $politicus = Politicus::where('id', $id)->with('partijnaam')->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id')->first();

        } catch (\Exception $e) {
            return "Politicus niet gevonden";
        }

        return $politicus;
    }
}

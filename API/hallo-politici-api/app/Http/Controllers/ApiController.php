<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Politicus;

class ApiController extends Controller
{
    protected function getStartingPolitici(){
        $politici = Politicus::inRandomOrder()->select('voornaam', 'familienaam', 'afbeelding')->with('partijnaam')->get();

        return $politici;
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vraag_antwoord extends Model
{
    protected $table = 'vraag_antwoord';

    public function politicus()
    {
        return $this->belongsTo('App\Politicus')->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id');
    }

    public function vraag()
    {
        return $this->belongsTo('App\Vraag', 'vraag_id')->whereNull('afgewezen_datum');
    }

    public function getAllPoliticiForQuestion()
    {
        //op 1 of andere manier alle politici ophalen waaraan die vraag gesteld is.
    }



}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vraag_antwoord extends Model
{
    protected $table = 'vraag_antwoord';

    public function politicus()
    {
        return $this->belongsTo('App\Politicus');
    }

    public function vraag()
    {
        return $this->belongsTo('App\Vraag', 'vraag_id')->whereNull('afgewezen_datum');
    }

}

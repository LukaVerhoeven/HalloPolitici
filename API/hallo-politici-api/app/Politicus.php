<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Politicus extends Model
{
    protected $table = 'politici';

    public function partijnaam()
    {
        return $this->belongsTo('App\Partij', 'partij_id')->select('id', 'naam');
    }
}

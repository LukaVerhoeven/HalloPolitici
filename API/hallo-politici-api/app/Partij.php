<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partij extends Model
{
    protected $table = 'partijen';

    public function politici()
    {
        return $this->hasMany('App\Politicus', 'partij_id');
    }
}

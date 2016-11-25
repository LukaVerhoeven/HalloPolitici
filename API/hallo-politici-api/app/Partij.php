<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partij extends Model
{
    protected $table = 'partijen';

    public function Politici()
    {
        return $this->hasMany('App\Politicus');
    }
}

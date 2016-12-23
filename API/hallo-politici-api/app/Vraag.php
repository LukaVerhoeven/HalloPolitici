<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vraag extends Model
{
    protected $table = 'vragen';

    public function stemmen()
    {
        return $this->hasMany('App\Vraag_stem', 'vraag_id');
    }
}

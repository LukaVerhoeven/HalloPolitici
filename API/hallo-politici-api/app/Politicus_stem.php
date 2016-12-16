<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Politicus_stem extends Model
{
    protected $table = 'politicus_stems';

    protected $fillable = [
        'gebruiker_id', 'politicus_id', 'hasLiked'
    ];

    public function politicus() {
        return $this->belongsTo('App\Politicus', 'politicus_id')->with('partijnaam')->select('id','voornaam', 'familienaam', 'afbeelding', 'partij_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Politicus_stem extends Model
{
    protected $fillable = [
        'gebruiker_id', 'politicus_id', 'hasLiked'
    ];
}

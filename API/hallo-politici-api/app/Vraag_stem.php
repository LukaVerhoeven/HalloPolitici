<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vraag_stem extends Model
{
    protected $table = 'vraag_stem';

    public $timestamps = false;

    protected $fillable = [
        'vraag_id',
        'fb_id',
        'vote_normal',
        'gebruiker_id'
    ];
}

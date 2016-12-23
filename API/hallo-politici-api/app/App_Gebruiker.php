<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class App_Gebruiker extends Model
{
    protected $fillable = ['fb_id', 'gebruiker_id', 'naam'];
}

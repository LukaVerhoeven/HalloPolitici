<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'hallopoliticiadmin',
            'email' => 'hallopoliticiadmin@gmail.com',
            'password' => bcrypt('hallopoladmin1234'),
        ]);

        DB::table('afbeelding_tekstjes')->insert([
            'tekst' => 'Bedankt om op enkele van mijn vragen te stemmen via de Hallo Politici App!'
        ]);
    }
}

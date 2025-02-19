<?php

namespace Database\Seeders;

use App\Models\Client;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ClientSeeder extends Seeder {

    public function run (): void {
        Client::factory(10)->create();
    }
}

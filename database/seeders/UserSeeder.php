<?php

namespace Database\Seeders;

use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run (): void {
        // User::factory(10)->create();

        User::factory()->create([
            'first_name' => 'Michael',
            'last_name' => 'Kirkbright',
            'email' => 'michael@animitemedia.com',
            'password' => Hash::make('leedsunited'),
        ]);
    }
}

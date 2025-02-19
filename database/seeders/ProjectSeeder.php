<?php

namespace Database\Seeders;

use App\Models\Project;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ProjectSeeder extends Seeder {

    public function run (): void {
        Project::factory(30)->create();
    }
}

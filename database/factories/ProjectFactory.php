<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\=Project>
 */
class ProjectFactory extends Factory {

    public function definition (): array {
        return [
            'client_id' => Client::query()->inRandomOrder()->first()->id,
            'name' => fake()->words(3, true),
        ];
    }
}

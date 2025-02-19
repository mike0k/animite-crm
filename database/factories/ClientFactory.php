<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\=Client>
 */
class ClientFactory extends Factory {

    public function definition (): array {
        return [
            'name' => fake()->unique()->company(),
            'color' => fake()->hexColor(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->e164PhoneNumber('GB'),
            'address' => fake()->address(),
        ];
    }
}

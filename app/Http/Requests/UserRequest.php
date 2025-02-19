<?php

namespace App\Http\Requests;

use App\Components\FormRequest;
use App\Enums\BasicStatus;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest {

    protected function baseRules (): array {
        return [
            'status' => ['required', 'integer', Rule::enum(BasicStatus::class)],
            'email' => ['required', 'string', 'max:255', 'email'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],

            'password' => ['required', 'string', 'max:100', 'min:6', 'confirmed'],
            'password_confirmation ' => ['required', 'string', 'max:100', 'min:6'],
            'existing_password' => ['required', 'string', 'max:100', 'min:6', 'current_password'],
        ];
    }

    protected function ruleList (): array {
        return [
            'create' => [
                'first_name',
                'last_name',
                'email',
            ],
            'update.contact' => [
                'first_name',
                'last_name',
                'email',
                'status',
            ],
            'update.password' => [
                'password',
                //'password_confirmation',
                'existing_password',
            ]
        ];
    }
}

<?php

namespace App\Http\Requests;

use App\Components\FormRequest;

class ClientRequest extends FormRequest {

    protected function baseRules (): array {
        return [
            'address' => ['nullable', 'string', 'max:500'],
            'color' => ['nullable', 'string', 'max:7', 'hex_color'],
            'email' => ['nullable', 'string', 'max:255', 'email'],
            'inv_name' => ['nullable', 'string', 'max:255'],
            'inv_email' => ['nullable', 'string', 'max:255', 'email'],
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:15'],
        ];
    }

    protected function ruleList (): array {
        return [
            'create' => [
                'name',
            ],
            'update.contact' => [
                'address',
                'email',
                'name',
                'phone',
            ],
            'update.settings' => [
                'color',
                'inv_name',
                'inv_email',
            ]
        ];
    }
}

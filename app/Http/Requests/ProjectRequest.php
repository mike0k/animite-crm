<?php

namespace App\Http\Requests;

use App\Components\FormRequest;
use App\Enums\BasicStatus;
use Illuminate\Validation\Rule;

class ProjectRequest extends FormRequest {

    protected function baseRules (): array {
        return [
            'client_id' => ['required', 'integer'],
            'name' => ['required', 'string', 'max:255'],
            'status' => ['required', 'integer', Rule::enum(BasicStatus::class)],
        ];
    }

    protected function ruleList (): array {
        return [
            'create' => [
                'client_id',
                'name',
            ],
            'update.settings' => [
                'client_id',
                'name',
                'status',
            ],
        ];
    }
}

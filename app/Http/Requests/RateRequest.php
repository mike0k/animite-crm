<?php

namespace App\Http\Requests;

use App\Components\FormRequest;
use App\Enums\RateType;
use Illuminate\Validation\Rule;

class RateRequest extends FormRequest {

    protected function baseRules (): array {
        return [
            'project_id' => ['required', 'integer'],
            'start_time' => ['required', 'date'],
            'end_time' => ['nullable', 'date'],
            'type' => ['required', 'integer', Rule::enum(RateType::class)],
            'rate' => ['required', 'decimal:2'],
            'hour' => ['nullable', 'integer'],
        ];
    }

    protected function ruleList (): array {
        return [
            'create' => [
                'project_id',
                'start_time',
                'end_time',
                'type',
                'rate',
                'hour',
            ],
            'update.settings' => [
                'project_id',
                'start_time',
                'end_time',
                'type',
                'rate',
                'hour',
            ],
        ];
    }
}

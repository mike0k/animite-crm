<?php

namespace App\Models;

use App\Enums\RateType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Components\Model;

class Rate extends Model {
    use HasFactory;

    protected $casts = [
        'type' => RateType::class,
    ];

    protected $fillable = [
        'project_id',
        'start_time',
        'end_time',
        'type',
        'rate',
        'hour',
    ];

    public function labels (): array {
        return [
            ...parent::labels(),
            'project_id' => 'Project',
            'start_time' => 'Start Date',
            'end_time' => 'End Date',
        ];
    }

    public function project () {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function listType (): array {
        return $this->listEnum(RateType::toArray());
    }
}

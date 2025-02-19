<?php

namespace App\Models;

use App\Enums\BasicStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Components\Model;

class Project extends Model {
    use HasFactory;

    private $_project;

    protected $attributes = [
        'status' => BasicStatus::Active,
    ];

    protected $casts = [
        'status' => BasicStatus::class,
    ];

    protected $fillable = [
        'status',
        'name',
        'client_id',
    ];

    public function activities () {
        return $this->hasMany(Activity::class, 'project_id');
    }

    public function client () {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function rates () {
        return $this->hasMany(Rate::class, 'project_id');
    }

    public function labels (): array {
        return [
            ...parent::labels(),
            'client_id' => 'Client',
        ];
    }

    public function listProject () {
        if (empty($this->_project)) {
            $models = self::query()
                ->orderBy('name')
                ->get();
            $this->_project = $this->listRows($models, 'id', 'name');
        }

        return $this->_project;
    }
}

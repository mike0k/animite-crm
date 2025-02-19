<?php

namespace App\Models;

use App\Components\Model;
use App\Enums\BasicStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model {
    use HasFactory;

    private $_client;

    protected $attributes = [
        'status' => BasicStatus::Active,
        'name' => null,
        'color' => null,
        'email' => null,
        'phone' => null,
        'address' => null,
        'inv_name' => null,
        'inv_email' => null,
    ];

    protected $casts = [
        'status' => BasicStatus::class,
    ];
    protected $fillable = [
        'status',
        'name',
        'color',
        'email',
        'phone',
        'address',
        'inv_name',
        'inv_email',
    ];

    public function labels (): array {
        return [
            ...parent::labels(),
            'inv_name' => 'Invoice Name',
            'inv_email' => 'Invoice Email',
        ];
    }

    public function listClient () {
        if (empty($this->_client)) {
            $list = [];
            $models = self::query()
                ->orderBy('name')
                ->get();
            $this->_client = $this->listRows($models, 'id', 'name');
        }

        return $this->_client;
    }

    public function projects () {
        return $this->hasMany(Project::class, 'client_id');
    }
}

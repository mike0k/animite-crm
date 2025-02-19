<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\BasicStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class User extends \App\Components\User {
    use HasFactory, Notifiable;

    protected $attributes = [
        'status' => BasicStatus::Active,
    ];

    protected $casts = [
        'status' => BasicStatus::class,
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $fillable = [
        'status',
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'salt',
    ];

    protected static function boot () {
        parent::boot();

        static::creating(function ($user) {
            if (empty($user->salt)) {
                $user->salt = Str::random(20);
            }
        });
    }

    public function labels (): array {
        return [
            ...parent::labels(),
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
        ];
    }

}

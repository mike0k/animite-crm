<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Components\Model;

class Activity extends Model {
    use HasFactory;

    protected $fillable = [
        'start_time',
        'end_time',
    ];
}

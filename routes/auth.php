<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])
    ->group(function () {

        Route::get('login', [AuthController::class, 'create'])
            ->name('login');

        Route::post('login', [AuthController::class, 'store']);

        Route::get('forgot-password', [AuthController::class, 'forgot'])
            ->name('auth.forgot');

    });

Route::middleware(['auth'])
    ->group(function () {

        Route::get('logout', [AuthController::class, 'destroy'])
            ->name('logout');

    });

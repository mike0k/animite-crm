<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RateController;

Route::middleware(['auth'])
    ->name('rate.')
    ->group(function () {

        Route::get('/rate', [RateController::class, 'index'])->name('index');

        Route::post('/rate/create', [RateController::class, 'create'])->name('create');

        Route::get('/rate/{rate}', [RateController::class, 'show'])->name('show');
        Route::patch('/rate/{rate}/settings', [RateController::class, 'updateSettings'])->name('update.settings');

    });

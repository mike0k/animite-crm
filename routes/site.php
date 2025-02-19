<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;

Route::middleware(['auth'])
    ->name('site.')
    ->group(function () {

        Route::get('/', [SiteController::class, 'index'])->name('index');

    });

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;

Route::middleware(['auth'])
    ->name('client.')
    ->group(function () {

        Route::get('/client', [ClientController::class, 'index'])->name('index');

        Route::post('/client/create', [ClientController::class, 'create'])->name('create');

        Route::get('/client/{client}', [ClientController::class, 'show'])->name('show');
        Route::patch('/client/{client}/contact', [ClientController::class, 'updateContact'])->name('update.contact');
        Route::patch('/client/{client}/settings', [ClientController::class, 'updateSettings'])->name('update.settings');
        //Route::delete('/client/{client}', [ClientController::class, 'destroy'])->name('destroy');

    });

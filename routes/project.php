<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::middleware(['auth'])
    ->name('project.')
    ->group(function () {

        Route::get('/project', [ProjectController::class, 'index'])->name('index');

        Route::post('/project/create', [ProjectController::class, 'create'])->name('create');

        Route::get('/project/{project}', [ProjectController::class, 'show'])->name('show');
        Route::patch('/project/{project}/settings', [ProjectController::class, 'updateSettings'])->name('update.settings');
        //Route::delete('/client/{client}', [ProjectController::class, 'destroy'])->name('destroy');

    });

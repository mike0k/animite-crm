<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth'])
    ->name('user.')
    ->group(function () {

        Route::get('/user', [UserController::class, 'index'])->name('index');

        Route::get('/user/create', [UserController::class, 'create'])->name('create');
        Route::post('/user/create', [UserController::class, 'store']);

        Route::get('/user/{user}', [UserController::class, 'show'])->name('show');
        Route::patch('/user/{user}/contact', [UserController::class, 'updateContact'])->name('update.contact');
        Route::patch('/user/{user}/password', [UserController::class, 'updatePassword'])->name('update.password');
        //Route::delete('/user/{user}', [UserController::class, 'destroy'])->name('destroy');

    });

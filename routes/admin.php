<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});

Route::get('components', function () {
    return Inertia::render('Admin/Components');
});
Route::get('components/button', function () {
    return Inertia::render('Admin/Components');
});
Route::get('components/input', function () {
    return Inertia::render('Admin/Components');
});

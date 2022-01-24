<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/set-theme/{theme_name}', function ($theme_name) {
    if ($theme_name == 'reset') {
        session()->forget('selectedTheme');
        return redirect()->back();
    }

    session()->put('selectedTheme', $theme_name);
    return redirect()->back();
})->name('setTheme');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');


/**
 * TODO
 * set color, follow daisy ref
 */

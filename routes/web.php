<?php

use Mxent\Base\Http\Controllers\BaseController;

Route::get('/', [BaseController::class, 'index'])->name('index');
Route::get('/sample', [BaseController::class, 'sample'])->name('sample');

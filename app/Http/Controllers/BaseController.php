<?php

namespace Mxent\Base\Http\Controllers;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class BaseController extends Controller implements HasMiddleware
{
    /**
     * Middleware
     */
    public static function middleware(): array
    {
        return [
            // new Middleware('auth'),
        ];
    }

    /**
     * Index
     */
    public function index()
    {
        return inertia('base/index');
    }

    /**
     * Sample
     */
    public function sample()
    {
        return inertia('base/sample');
    }
}

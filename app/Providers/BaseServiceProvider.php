<?php

namespace Mxent\Base\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class BaseServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
        $this->loadTranslationsFrom(__DIR__.'/../../resources/lang', 'base');
        $this->publishes([
            __DIR__.'/../../config/base.php' => config_path('base.php'),
        ], 'base-config');
        $this->publishes([
            __DIR__.'/../../database/migrations' => database_path('migrations'),
        ], 'base-migrations');
        $this->publishes([
            __DIR__.'/../../database/seeders' => database_path('seeders'),
        ], 'base-seeders');
        $this->publishes([
            __DIR__.'/../../resources/lang' => $this->app->langPath('vendor/base'),
        ], 'base-lang');
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/base'),
        ], 'base-views');
        $this->publishes([
            __DIR__.'/../../resources/js' => resource_path('js/vendor/base'),
        ], 'base-js');
        $this->publishes([
            __DIR__.'/../../resources/css' => resource_path('css/vendor/base'),
        ], 'base-css');

        Vite::prefetch(concurrency: 3);
    }

    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->mergeConfigFrom(__DIR__.'/../../config/base.php', 'base');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'base');
    }
}

<?php

namespace App\Http\Controllers;

use App\Components\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SiteController extends Controller {

    public function index (): Response {
        return Inertia::render('Site/Index');
    }

}

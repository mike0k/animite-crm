<?php

namespace App\Http\Controllers;

use App\Components\Controller;
use App\Http\Requests\RateRequest;
use App\Models\Project;
use App\Models\Rate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RateController extends Controller {

    public function index (Request $request): Response {
        $perPage = $request->input('rowsPerPage', 10);
        $perPage = in_array($perPage, [10, 25, 50, 100]) ? $perPage : 10;

        $models = Rate::with([
            'project:id,name,client_id',
            'project.client:id,name'
        ])->paginate($perPage);

        return Inertia::render('Rate/Index', [
            'rates' => $models,
            'labels' => ['rate' => Rate::instance()->labels()],
            'lists' => [
                'project' => Project::instance()->listProject(),
                'type' => Rate::instance()->listType(),
            ],
        ]);
    }

    public function show (Rate $rate): Response {
        $rate->load('client:id,name');

        return Inertia::render('Rate/Show', [
            'rate' => $rate,
            'labels' => ['rate' => $rate->labels()],
            'lists' => [
                //'client' => Project::instance()->listProject(),
                'type' => $rate->listType(),
            ],
        ]);
    }

    public function create (RateRequest $request): RedirectResponse {
        $request->setScenario('create');
        $data = $request->validate($request->rules());

        $rate = Rate::create($data);

        return redirect()->route('rate.show', $rate)->with('success', 'Contact details updated.');
    }
    public function updateSettings (RateRequest $request, Rate $rate): RedirectResponse {
        $request->setScenario('update.settings');
        $data = $request->validate($request->rules());

        $rate->update($data);

        return redirect()->route('rate.show', $rate)->with('success', 'Rate settings updated.');
    }

}

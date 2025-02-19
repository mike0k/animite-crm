<?php

namespace App\Http\Controllers;

use App\Components\Controller;
use App\Http\Requests\ProjectRequest;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller {

    public function index (Request $request): Response {
        $perPage = $request->input('rowsPerPage', 10);
        $perPage = in_array($perPage, [10, 25, 50, 100]) ? $perPage : 10;

        $models = Project::with('client:id,name')->paginate($perPage);

        return Inertia::render('Project/Index', [
            'projects' => $models,
            'labels' => ['project' => Project::instance()->labels()],
            'lists' => ['client' => Client::instance()->listClient()],
        ]);
    }

    public function show (Request $request, Project $project): Response {
        $perPage = $request->input('rowsPerPage', 10);
        $perPage = in_array($perPage, [10, 25, 50, 100]) ? $perPage : 10;

        $project->load('client:id,name');
        $activities = $project->activities()->paginate($perPage);

        return Inertia::render('Project/Show', [
            'project' => $project,
            'activities' => $activities,
            'labels' => ['project' => $project->labels()],
            'lists' => [
                'client' => Client::instance()->listClient(),
                'status' => $project->listStatus(),
            ],
        ]);
    }

    public function create (ProjectRequest $request): RedirectResponse {
        $request->setScenario('create');
        $data = $request->validate($request->rules());

        $project = Project::create($data);

        return redirect()->route('project.show', $project)->with('success', 'Contact details updated.');
    }

    public function updateSettings (ProjectRequest $request, Project $project): RedirectResponse {
        $request->setScenario('update.settings');
        $data = $request->validate($request->rules());

        $project->update($data);

        return redirect()->route('project.show', $project)->with('success', 'Project settings updated.');
    }

}

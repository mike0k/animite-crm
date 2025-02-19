<?php

namespace App\Http\Controllers;

use App\Components\Controller;
use App\Http\Requests\ClientRequest;
use App\Models\Client;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller {

    public function index (Request $request): Response {
        $perPage = $request->input('rowsPerPage', 10);
        $perPage = in_array($perPage, [10, 25, 50, 100]) ? $perPage : 10;

        $models = Client::paginate($perPage);

        return Inertia::render('Client/Index', [
            'clients' => $models,
            'labels' => ['client' => Client::instance()->labels()]
        ]);
    }

    public function show (Client $client): Response {
        return Inertia::render('Client/Show', [
            'client' => $client,
            'labels' => ['client' => $client->labels()]
        ]);
    }

    public function create (ClientRequest $request): RedirectResponse {
        $request->setScenario('create');
        $data = $request->validate($request->rules());

        $client = Client::create($data);

        return redirect()->route('client.show', $client)->with('success', 'Contact details updated.');
    }

    public function updateContact (ClientRequest $request, Client $client): RedirectResponse {
        $request->setScenario('update.contact');
        $data = $request->validate($request->rules());

        $client->update($data);

        return redirect()->route('client.show', $client)->with('success', 'Contact details updated.');
    }

    public function updateSettings (ClientRequest $request, Client $client): RedirectResponse {
        $request->setScenario('update.settings');
        $data = $request->validate($request->rules());

        $client->update($data);

        return redirect()->route('client.show', $client)->with('success', 'Client settings updated.');
    }

}

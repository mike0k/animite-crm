<?php

namespace App\Http\Controllers;

use App\Components\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller {

    public function index (Request $request): Response {
        $perPage = $request->input('rowsPerPage', 10);
        $perPage = in_array($perPage, [10, 25, 50, 100]) ? $perPage : 10;

        $models = User::paginate($perPage);

        return Inertia::render('User/Index', [
            'users' => $models,
            'labels' => ['user' => User::instance()->labels()]
        ]);
    }

    public function show (User $user): Response {
        return Inertia::render('User/Show', [
            'user' => $user,
            'labels' => ['user' => $user->labels()],
            'lists' => [
                'status' => $user->listStatus(),
            ],
        ]);
    }

    public function updateContact (UserRequest $request, User $user): RedirectResponse {
        $request->setScenario('update.contact');
        $data = $request->validate($request->rules());

        $user->update($data);

        return redirect()->route('user.show', $user)->with('success', 'Contact details updated.');
    }

    public function updatePassword (UserRequest $request, User $user): RedirectResponse {
        $request->setScenario('update.password');
        $data = $request->validate($request->rules());

        $user->password = Hash::make($data['password']);
        $user->save();

        return redirect()->route('user.show', $user)->with('success', 'Password updated.');
    }

}

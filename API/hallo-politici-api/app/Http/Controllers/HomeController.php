<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Afbeelding_tekstjes;
use Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $textItems = Afbeelding_tekstjes::all();

        return view('home', [
            "textItems" => $textItems
        ]);
    }

    public function newText()
    {
        return view('text-new');
    }

    public function postNewText(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tekst' => 'required'
        ]);

        if ($validator->fails()) {
           return redirect($request->fullUrl())
                      ->withErrors($validator)
                      ->withInput();
        }

        Afbeelding_tekstjes::create([
            'tekst' => $request->tekst
        ]);

        return redirect('/home');
    }

    public function editText($id)
    {
        $textItem = Afbeelding_tekstjes::find($id);

        if (!empty($textItem)) {
            return view('text-edit', [
                "textItem" => $textItem
            ]);
        }
        else {
            return redirect('/home');
        }
    }

    public function postEditText($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tekst' => 'required'
        ]);

        if ($validator->fails()) {
           return redirect($request->fullUrl())
                      ->withErrors($validator)
                      ->withInput();
        }

        $textItem = Afbeelding_tekstjes::find($id);

        if (!empty($textItem)) {
            $textItem->update([
                'tekst' => $request->tekst
            ]);
            return redirect('/home');
        }
        else {
            return redirect('/home');
        }
    }

    public function deleteText($id)
    {
        $textItem = Afbeelding_tekstjes::find($id)->delete();

        return redirect('/home');
    }
}

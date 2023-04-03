<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lesson;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Lesson::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $lesson = new Lesson();
        $lesson -> user_id = $request -> user_id;
        $lesson -> title = $request -> title;
        $lesson -> start = $request -> start;
        $lesson -> end = $request -> end;
        $lesson -> save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $lesson = Lesson::find($id);
        return $lesson;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $lesson = Lesson::findOrFail($request -> id);
        $lesson -> user_id = $request -> user_id;
        $lesson -> title = $request -> title;
        $lesson -> start = $request -> start;
        $lesson -> end = $request -> end;
        $lesson -> is_confirmed = $request -> is_confirmed;
        $lesson -> save();
        return $lesson;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // only the teacher can delete lessons. This happens in the confirm lesson modal
        $lesson = Lesson::findOrFail($id);
        $lesson->delete();
	    return response()->json(null, 204);
    }

        /**
     * Update the specified resource in storage.
     */
    // public function confirm(Request $request, string $id)
    // {
    //     //
    //     $lesson = Lesson::findOrFail($request -> id);
    //     $lesson -> is_confirmed = $request -> is_confirmed;
    //     $lesson -> save();
    //     return $lesson;
    // }
}

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
        $lesson -> student_name = $request -> student_name;
        $lesson -> start_time = $request -> start_time;
        $lesson -> end_time = $request -> end_time;
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
        $lesson -> student_name = $request -> student_name;
        $lesson -> start_time = $request -> start_time;
        $lesson -> end_time = $request -> end_time;
        $lesson -> save();
        return $lesson;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // don't allow user to delete lessons
    }
}

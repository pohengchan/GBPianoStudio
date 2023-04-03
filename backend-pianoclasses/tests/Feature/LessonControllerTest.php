<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Lesson;

class LessonControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the index method of LessonController.
     *
     * @return void
     */
    public function test_lesson()
{
    // Create a lesson and a user to update it with
    $lesson = Lesson::factory()->create();
    $user = User::factory()->create();

    // Define the new values to update the lesson with
    $data = [
        'user_id' => $user->id,
        'title' => 'New Title',
        'start' => now(),
        'end' => now()->addHour(),
        'is_confirmed' => true,
    ];

    // Send a PUT request to update the lesson
    $response = $this->put("/api/lessons/{$lesson->id}", $data);

    // Check that the response status code is 200 OK
    $response->assertStatus(200);

    // Check that the lesson was updated in the database
    $updatedLesson = Lesson::findOrFail($lesson->id);
    $this->assertEquals($user->id, $updatedLesson->user_id);
    $this->assertEquals('New Title', $updatedLesson->title);
    $this->assertEquals($data['start'], $updatedLesson->start);
    $this->assertEquals($data['end'], $updatedLesson->end);
    $this->assertTrue($updatedLesson->is_confirmed);
}
}
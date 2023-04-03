<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\User;

class CreateUserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the creation of a new user
     *
     * @return void
     */
    public function testCreateUser()
    {
        // Arrange
        $user = [
            'contact_name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'phone_number' => '1234567890',
            'student_name' => 'Jane Doe',
            'date_of_birth' => '1990-01-01',
            'password' => 'password'
        ];

        // Act
        $createdUser = User::create($user);

        // Assert
        $this->assertEquals($user['contact_name'], $createdUser->contact_name);
        $this->assertEquals($user['email'], $createdUser->email);
        $this->assertEquals($user['phone_number'], $createdUser->phone_number);
        $this->assertEquals($user['student_name'], $createdUser->student_name);
        $this->assertEquals($user['date_of_birth'], $createdUser->date_of_birth->format('Y-m-d'));
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'contact_name' => 'Alex',
            'email' => 'alex@alex.com',
            'phone_number' => '6688555222',
            'student_name' => 'cris',
            'date_of_birth' => '2000-03-14',
            'password' => 'password',
            'is_authorised' => 1
        ]);
    }
}

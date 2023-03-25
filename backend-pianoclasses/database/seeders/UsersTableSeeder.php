<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'contact_name' =>'alex',
            'email' =>'alex@mail.com',
            'student_name'=>'laura',
            'candidate_number'=>'Ernest',
            'phone_number'=>'123567498',
            'date_of_birth'=>'1979-06-09',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_authorised'=>true,
            'is_admin'=>true
        ]);
    }
}namespace Database\Seeders;
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
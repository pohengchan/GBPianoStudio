<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('schedule')->insert([
            'user_id'=>'1',
            'student_name'=>'cris',
            'start_time'=>'2023-03-17T16:30:00',
            'end_time'=>'2023-03-17T17:30:00',
            'prev_start_time'=>'2023-03-10T16:30:00',
            'prev_end_time'=>'2023-03-10T17:30:00',
            'is_confirmed'=>1
        ]);
    }
}

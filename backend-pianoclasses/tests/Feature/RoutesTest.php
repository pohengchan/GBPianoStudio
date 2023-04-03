<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;




class RoutesTest extends TestCase
{
    public function test_Routelogin(): void
    {
        $response = $this->post('api/login');

        $response->assertStatus(200);
    }
    public function test_RouteRegister (): void
    {
        $response = $this->post('api/register');

        $response->assertStatus(200);
}
    public function test_Route_User_Logout(): void
{
        $response = $this->post('api/logout');

        $response->assertStatus(302);
}

public function test_User():void
{
        $response = $this->get('api/user');

        $response->assertStatus(302);
}



}
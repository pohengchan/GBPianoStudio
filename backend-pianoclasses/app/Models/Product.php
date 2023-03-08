<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    //By convention, Laravel assumes that the Product model is associated with the products table. However, if you need to associate the model with a custom table name, you can use the $table property to declare the name of the table. The model will then be associated with a table named custom_products.
    //protected $table = 'custom_products';

    /* Add the fillable property into the Product Model */
    protected $fillable = ['title', 'description', 'price', 'availability'];

}

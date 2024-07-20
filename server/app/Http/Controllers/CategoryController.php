<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $categoria = Category::create($request->all());
    return response()->json($categoria, 201);
}

    /**
     * Display the specified resource.
     */
    public function show($id)
{
    return Category::findOrFail($id);
}

    /**
     * Show the form for editing the specified resource.
     */
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $categoria = Category::findOrFail($id);
    $categoria->update($request->all());
    return response()->json($categoria, 200);
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    Category::destroy($id);
    return response()->json(null, 204);
}


}

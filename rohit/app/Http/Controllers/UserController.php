<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function fetchdata(){
        
        $users = DB::table('cnb_student_list_new')
        ->select("S_No", "Batch", "Admission_no", "Student_name", "Father_name")
        ->orderBy('S_No', 'desc')
        ->get();
          return response()->json($users);

         


    }
    public function send_form_data(Request $request){
       
        $data=array(
            "Batch"=>$request->batch,
            "Admission_no"=>$request->Admission_NO,
            "Student_name"=>$request->student_name,
            "Father_name"=>$request->father_name,
            "Contact_no"=>7898347534,



        );
       $result= DB::table('cnb_student_list_new')->insert($data);
        
        

       


    }
    public function fetcheditdata(Request $request){
        $id=$request->id;
        print_r($id);




    }
}

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Task from "@/models/Task";

export const GET = async (request) => {
    try {
      await connect();
  
      const tasks = await Task.find({}); 
      
      return new NextResponse(JSON.stringify(tasks), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };

  export const TASK = async (request) => {
    const body = await request.json();
  
    const newTask = new Task(body);
  
    try {
      await connect();
  
      await newTask.save();
  
      return new NextResponse("Task has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
import { getDoctors, getDoctorsByDepartment } from "@/service/doctor";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const department = url.searchParams.get("department");

  if (department) {
    const doctors = await getDoctorsByDepartment(department);
    return NextResponse.json(doctors);
  }

  const doctors = await getDoctors();
  return NextResponse.json(doctors);
}

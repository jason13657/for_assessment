import path from "path";
import { promises as fs } from "fs";

export type Doctor = {
  name: string;
  department: string;
};

export async function getDoctors(): Promise<Doctor[]> {
  const filePath = path.join(process.cwd(), "data", "doctors.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getDoctorsByDepartment(department: string): Promise<Doctor[] | undefined> {
  const doctors = await getDoctors();
  return doctors.filter((item) => item.department === department);
}

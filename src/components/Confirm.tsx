import { makeDatePretty, makeDepartmentNamePretty } from "@/util";
import { FormT } from "./Booking";

type Props = {
  formData: FormT;
};

export default function Confirm({ formData }: Props) {
  return (
    <div>
      <h2 className="text-center p-2 font-semibold text-lg">Confirm booking inforamtion</h2>
      <div className="p-2 flex flex-col gap-2 text-lg">
        <p>
          Name :{" "}
          <strong>
            {formData.personalInfo.first} {formData.personalInfo.last}
          </strong>
        </p>
        <p>
          Contact Number: <strong>{formData.personalInfo.number}</strong>
        </p>
        <p>
          Doctor Name : <strong>{formData.doctor.name}</strong>
        </p>
        <p>
          Department : <strong>{makeDepartmentNamePretty(formData.doctor.department)}</strong>
        </p>
        <p>
          Date of reservation : <strong>{makeDatePretty(formData.date.date?.toString())}</strong>
        </p>
        <p>
          Time of reservation : <strong>{formData.date.time}</strong>
        </p>
      </div>
    </div>
  );
}

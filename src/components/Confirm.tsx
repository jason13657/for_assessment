type Props = {};

export default function Confirm({}: Props) {
  return (
    <div>
      <h2 className="text-center p-2 font-semibold text-lg">
        Confirm booking inforamtion
      </h2>
      <div className="p-2 flex flex-col gap-2 text-lg">
        <p>
          Name : <strong>Robert Lewandowski</strong>
        </p>
        <p>
          Doctor Name : <strong>Oliver Smith</strong>
        </p>
        <p>
          Department : <strong>Pediatric surgery</strong>
        </p>
        <p>
          Date of reservation : <strong>4 MAR 2024</strong>
        </p>
        <p>
          Time of reservation : <strong>10:00</strong>
        </p>
      </div>
    </div>
  );
}

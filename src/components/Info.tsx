type Props = {};

export default function Info({}: Props) {
  return (
    <section className="inline-flex flex-col justify-center bg-white p-3 max-w-3xl w-full mt-3 rounded-sm">
      <h2 className="py-4 font-semibold text-xl">Online Reservation</h2>
      <div className="border rounded-md p-2 flex flex-col [&_p]:text-sm gap-2">
        <p>
          - Online reservations can be made after two days from the date of application.{" "}
          <strong>(Except weekends and holidays)</strong>
        </p>
        <p>- If you want outpatient treatment on the same day, please call the call center and visit.</p>
        <p>- Phone reservation: 02-1234-1234</p>
        <p>- Consultation hours: Weekdays (08:00-17:00), Saturdays (08:00-12:00)</p>
      </div>
    </section>
  );
}

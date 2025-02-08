const AppointmentForm = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-5">
        <h2 className="text-3xl font-bold text-cyan-800 mb-6 text-center">
          Book Your Appointment
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              placeholder="Enter your phone number"
              pattern="\d{10}"
              title="Enter a valid 10-digit number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Time</label>
            <input
              type="time"
              className="w-full mt-1 p-3 border rounded-lg shadow-sm transition duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-600 transition duration-300 transform hover:scale-105"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;

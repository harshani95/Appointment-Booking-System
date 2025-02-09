import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Calender = () => {
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      getAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const getAvailableSlots = async (date) => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/slots?date=${date}`
      );
      setSlots(response.data.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error Fetching Slots", error);
      setSlots([]);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
        <h2 className="text-2xl font-bold text-slate-600 mb-4 text-center">
          Available Time Slots
        </h2>

        <label className="block text-gray-700 font-medium mb-1">
          Select Date:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <h3 className="text-lg font-semibold mb-2">Available Slots:</h3>
        {slots.length === 0 ? (
          <p className="text-gray-500">No slots available for this date.</p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`p-2 border rounded transition ${
                  selectedSlot === slot
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        )}

        <button
          className="mt-4 px-4 py-2 border rounded bg-slate-500 "
          onClick={() => navigate("/add-appointment")}
        >
          Appointment
        </button>
      </div>
    </>
  );
};

export default Calender;

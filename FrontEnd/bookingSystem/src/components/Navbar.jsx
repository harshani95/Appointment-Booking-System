const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="/">Appointment Booking System</a>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/appointment-list">All Appointments</a>
            </li>
            <li>
              <a href="/add-appointment">Add Appointment</a>
            </li>
            <li>
              <a href="/calender">Calender</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import DemographicsChart from "./DemographicsChart";
import CustomChart from "./CustomChart";
import appointmentsIcon from "../Images/appointmentsIcon.png"; // Adjust path as necessary
import patientsIcon from "../Images/patientsIcon.png";
import medicinesIcon from "../Images/medicinesIcon.png";
import labTestsIcon from "../Images/labTestsIcon.png";
import EmergancySection from "./EmergancySection";
import Avatar from "@mui/material/Avatar";
import Header from "./Header";
const Dashboard = () => {
  // Mock data for appointments with random avatar URLs
  const appointments = [
    {
      time: "9:30 AM",
      date: "05/12/2022",
      patientName: "Elizabeth Polson",
      patientAvatar: "https://i.pravatar.cc/50?img=1", // Random avatar
      doctorName: "Dr. John",
      doctorAvatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      time: "10:30 AM",
      date: "05/12/2022",
      patientName: "John David",
      patientAvatar: "https://i.pravatar.cc/50?img=3",
      doctorName: "Dr. Joel",
      doctorAvatar: "https://i.pravatar.cc/50?img=4",
    },
    {
      time: "11:00 AM",
      date: "05/12/2022",
      patientName: "Krishtav Rajan",
      patientAvatar: "https://i.pravatar.cc/50?img=5",
      doctorName: "Dr. Joel",
      doctorAvatar: "https://i.pravatar.cc/50?img=6",
    },
    {
      time: "11:30 AM",
      date: "05/12/2022",
      patientName: "EG Subramani",
      patientAvatar: "https://i.pravatar.cc/50?img=7",
      doctorName: "Dr. John",
      doctorAvatar: "https://i.pravatar.cc/50?img=8",
    },
  ];

  // Renamed state variable to avoid conflict
  const [isEmergencySectionVisible, setIsEmergencySectionVisible] =
    useState(false);

  const EmergancySectionHandler = () => {
    setIsEmergencySectionVisible(!isEmergencySectionVisible);
    console.log(isEmergencySectionVisible);
  };

  return (
    <>
      <Header param="Dashboard" />
      <main className="flex-1 bg-gray-100">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Activity Overview Section */}
          <div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Activity Overview</h4>
              <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded flex flex-col items-center">
                <img
                  src={appointmentsIcon}
                  alt="Appointments"
                  className="w-8 h-8 mb-2"
                />
                <h3 className="text-lg text-center font-semibold">100</h3>
                <h3 className="text-lg text-center font-semibold">
                  Appointments
                </h3>
              </div>
              <div className="bg-green-100 p-4 rounded flex flex-col items-center">
                <img
                  src={patientsIcon}
                  alt="Patients"
                  className="w-8 h-8 mb-2"
                />
                <h3 className="text-lg text-center font-semibold">50</h3>
                <h3 className="text-lg text-center font-semibold">
                  New Patients
                </h3>
              </div>
              <div className="bg-yellow-100 p-4 rounded flex flex-col items-center">
                <img
                  src={medicinesIcon}
                  alt="Medicines Sold"
                  className="w-8 h-8 mb-2"
                />
                <h3 className="text-lg text-center font-semibold">500</h3>
                <h3 className="text-lg text-center font-semibold">
                  Medicines Sold
                </h3>
              </div>
              <div className="bg-purple-100 p-4 rounded flex flex-col items-center">
                <img
                  src={labTestsIcon}
                  alt="Lab Tests"
                  className="w-8 h-8 mb-2"
                />
                <h3 className="text-lg text-center font-semibold">100</h3>
                <h3 className="text-lg text-center font-semibold">Lab Tests</h3>
              </div>
            </div>
          </div>

          {/* New Appointments Section */}
          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">New Appointments</h4>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Time</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Patient Name</th>
                  <th className="py-2">Doctor</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{appointment.time}</td>
                    <td className="py-2">{appointment.date}</td>

                    {/* Patient Column */}
                    <td className="py-2">
                      <div className="flex items-center">
                        <Avatar
                          className="mr-2"
                          src={appointment.patientAvatar}
                          alt={appointment.patientName}
                          sx={{ width: 30, height: 30 }} // Smaller avatar size
                        />
                        <span>{appointment.patientName}</span>
                      </div>
                    </td>

                    {/* Doctor Column */}
                    <td className="py-2">
                      <div className="flex items-center">
                        <Avatar
                          className="mr-2"
                          src={appointment.doctorAvatar}
                          alt={appointment.doctorName}
                          sx={{ width: 30, height: 30 }} // Smaller avatar size
                        />
                        <span>{appointment.doctorName}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Real Time data of patients Section */}
          <div className="bg-white p-4 rounded-lg shadow col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Patients</h4>
              <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
            </div>
            <div className="mb-6">
              <CustomChart />
            </div>
            <div className="flex justify-between text-gray-700">
              <div className="text-center">
                <p className="text-s">All time</p>
                <p className="text-lg font-semibold">41,234</p>
              </div>
              <div className="text-center">
                <p className="text-s">30 days</p>
                <p className="text-lg font-semibold">41,234</p>
              </div>
              <div className="text-center">
                <p className="text-s">7 days</p>
                <p className="text-lg font-semibold">41,234</p>
              </div>
            </div>
          </div>

          {/* Top Medicines Sold Section */}
          <div className="bg-white p-4 rounded-lg shadow col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Top Medicine Sold</h4>
              <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
            </div>
            <div className="text-sm">
              <DemographicsChart />
            </div>
          </div>

          {/*Emergency Section */}
          <div className="bg-white p-4 rounded-lg shadow col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Emergency</h4>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow"
                onClick={EmergancySectionHandler}
              >
                View Details
              </button>
            </div>

            {/* Example content */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Current Emergency Patients
                </span>
                <span className="text-xl font-bold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Available Ambulances</span>
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Doctors on Call</span>
                <span className="text-xl font-bold">5</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conditional rendering of the Emergency Section */}
        {isEmergencySectionVisible && (
          <EmergancySection EmergancySectionHandler={EmergancySectionHandler} />
        )}
      </main>
    </>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; // keep footer same

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">TripSage</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/plan-trip")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Plan new trip
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            + Create guide
          </button>
          <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center cursor-pointer">
            <span className="font-bold text-white">A</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow">
        {/* Your dashboard content */}
        <section className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Recently viewed and upcoming
          </h2>
          <p>
            You haven’t created anything yet.{" "}
            <span
              className="text-green-600 cursor-pointer"
              onClick={() => navigate("/plan-trip")}
            >
              Plan a new trip.
            </span>
          </p>
        </section>

        {/* Map Placeholder */}
        <section className="max-w-5xl mx-auto p-6">
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
            <span className="text-gray-500">[Map Placeholder]</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

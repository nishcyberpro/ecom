"use client";
import React, { useState } from "react";
import { FaUsers, FaShoppingCart, FaDollarSign, FaBox } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Dashboard = () => {
  // Demo data for charts
  const dailyOrdersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Orders",
        data: [50, 60, 70, 80, 90, 100, 110],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const dailySalesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Sales ($)",
        data: [500, 700, 800, 600, 900, 1000, 1200],
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
      },
    ],
  };

  const dailyNewCustomersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily New Customers",
        data: [5, 10, 8, 12, 15, 20, 25],
        borderColor: "#FFC107",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        fill: true,
      },
    ],
  };

  const productData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Units Sold",
        data: [120, 90, 150, 80, 60],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#FF5722",
          "#9C27B0",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  // Demo data for recent orders
  const [recentOrders, setRecentOrders] = useState([
    { id: 1, customer: "John Doe", amount: "$120", status: "Completed" },
    { id: 2, customer: "Jane Smith", amount: "$80", status: "Pending" },
    { id: 3, customer: "Michael Brown", amount: "$150", status: "Cancelled" },
    { id: 4, customer: "Emily Davis", amount: "$200", status: "Completed" },
    { id: 5, customer: "Chris Wilson", amount: "$50", status: "Pending" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Filtered orders based on search and status
  const filteredOrders = recentOrders.filter((order) => {
    const matchesSearch = order.customer
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Demo data for low-quantity products
  const lowQuantityProducts = [
    { id: 1, name: "Product A", quantity: 5 },
    { id: 2, name: "Product B", quantity: 3 },
    { id: 3, name: "Product C", quantity: 2 },
  ];

  return (
    <div className=" bg-white min-h-screen  p-2 max-sm:mt-10 max-w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
        {/* Total Sales */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ">
          <div className="p-3 bg-green-100 rounded-full">
            <FaDollarSign className="text-green-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-gray-600">$25,000</p>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <FaUsers className="text-blue-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Customers</h2>
            <p className="text-gray-600">1,200</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-3 bg-yellow-100 rounded-full">
            <FaShoppingCart className="text-yellow-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-gray-600">320</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Daily Orders Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Daily Orders</h2>
          <Line data={dailyOrdersData} options={chartOptions} />
        </div>

        {/* Daily Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Daily Sales</h2>
          <Line data={dailySalesData} options={chartOptions} />
        </div>

        {/* Daily New Customers Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Daily New Customers</h2>
          <Line data={dailyNewCustomersData} options={chartOptions} />
        </div>

        {/* Products Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Products Overview</h2>
          <Bar data={productData} options={chartOptions} />
        </div>
      </div>

      {/* Low Quantity Products Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Low Quantity Products</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Product ID</th>
              <th className="py-2 px-4">Product Name</th>
              <th className="py-2 px-4">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {lowQuantityProducts.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{product.id}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4 text-red-600">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search by customer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.amount}</td>
                <td
                  className={`py-2 px-4 ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import AdminLayout from "@/components/layout/adminLayout";
import { FiTruck, FiMapPin, FiClock } from "react-icons/fi";

const AdminDeliveries = () => {
  const deliveries = [
    {
      id: "DEL-001",
      orderId: "ORD-001",
      customer: "John Doe",
      address: "123 Main St, Lagos",
      status: "In Transit",
      estimatedDelivery: "2024-03-16",
      trackingNumber: "TRK123456789",
    },
    {
      id: "DEL-002",
      orderId: "ORD-002",
      customer: "Jane Smith",
      address: "456 Oak Ave, Abuja",
      status: "Delivered",
      estimatedDelivery: "2024-03-15",
      trackingNumber: "TRK987654321",
    },
    {
      id: "DEL-003",
      orderId: "ORD-003",
      customer: "Mike Johnson",
      address: "789 Pine Rd, Port Harcourt",
      status: "Pending",
      estimatedDelivery: "2024-03-17",
      trackingNumber: "TRK456789123",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Deliveries</h2>
          <div className="flex items-center gap-4">
            <select className="border rounded-full px-4 py-2">
              <option value="all">All Deliveries</option>
              <option value="delivered">Delivered</option>
              <option value="in-transit">In Transit</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Deliveries</h3>
            <p className="text-2xl font-bold mt-2">3</p>
            <p className="text-green-500 text-sm mt-2">+5% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">In Transit</h3>
            <p className="text-2xl font-bold mt-2">1</p>
            <p className="text-blue-500 text-sm mt-2">Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">On-time Delivery Rate</h3>
            <p className="text-2xl font-bold mt-2">95%</p>
            <p className="text-green-500 text-sm mt-2">+2% from last month</p>
          </div>
        </div>

        {/* Deliveries Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Delivery ID</th>
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Address</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Estimated Delivery</th>
                  <th className="text-left py-3 px-4">Tracking Number</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr key={delivery.id} className="border-b">
                    <td className="py-3 px-4">{delivery.id}</td>
                    <td className="py-3 px-4">{delivery.orderId}</td>
                    <td className="py-3 px-4">{delivery.customer}</td>
                    <td className="py-3 px-4">{delivery.address}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                          delivery.status
                        )}`}
                      >
                        {delivery.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{delivery.estimatedDelivery}</td>
                    <td className="py-3 px-4">{delivery.trackingNumber}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FiTruck />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
                          <FiMapPin />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-700">
                          <FiClock />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDeliveries;

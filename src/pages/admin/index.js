import AdminLayout from "@/components/layout/adminLayout";
import { FiShoppingBag, FiUsers, FiDollarSign, FiPackage } from "react-icons/fi";

const AdminDashboard = () => {
  const summaryCards = [
    {
      title: "Total Sales",
      value: "₦1,234,567",
      icon: <FiDollarSign size={24} />,
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Total Orders",
      value: "1,234",
      icon: <FiPackage size={24} />,
      change: "+8%",
      isPositive: true,
    },
    {
      title: "Total Products",
      value: "567",
      icon: <FiShoppingBag size={24} />,
      change: "+5%",
      isPositive: true,
    },
    {
      title: "Total Customers",
      value: "890",
      icon: <FiUsers size={24} />,
      change: "-2%",
      isPositive: false,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
                </div>
                <div className="p-3 bg-gray-100 rounded-full">{card.icon}</div>
              </div>
              <div className="mt-4">
                <span className={`text-sm ${card.isPositive ? "text-green-500" : "text-red-500"}`}>
                  {card.change}
                </span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((order) => (
                  <tr key={order} className="border-b">
                    <td className="py-3 px-4">#ORD-{order}</td>
                    <td className="py-3 px-4">Customer {order}</td>
                    <td className="py-3 px-4">2024-03-{order}</td>
                    <td className="py-3 px-4">₦{order * 10000}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Delivered
                      </span>
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

export default AdminDashboard;

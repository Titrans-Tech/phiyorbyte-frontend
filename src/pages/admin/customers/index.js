import AdminLayout from "@/components/layout/adminLayout";
import { FiUser, FiShoppingBag, FiMail, FiPhone } from "react-icons/fi";

const AdminCustomers = () => {
  const customers = [
    {
      id: "CUS-001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+234 123 456 7890",
      orders: 5,
      totalSpent: "₦250,000",
      lastOrder: "2024-03-15",
      status: "Active",
    },
    {
      id: "CUS-002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+234 987 654 3210",
      orders: 3,
      totalSpent: "₦150,000",
      lastOrder: "2024-03-14",
      status: "Active",
    },
    {
      id: "CUS-003",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+234 456 789 1230",
      orders: 2,
      totalSpent: "₦75,000",
      lastOrder: "2024-03-10",
      status: "Inactive",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Customers</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search customers..."
              className="border rounded-full px-4 py-2"
            />
            <select className="border rounded-full px-4 py-2">
              <option value="all">All Customers</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Customers</h3>
            <p className="text-2xl font-bold mt-2">3</p>
            <p className="text-green-500 text-sm mt-2">+10% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Active Customers</h3>
            <p className="text-2xl font-bold mt-2">2</p>
            <p className="text-green-500 text-sm mt-2">Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Orders</h3>
            <p className="text-2xl font-bold mt-2">10</p>
            <p className="text-green-500 text-sm mt-2">+15% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Average Order Value</h3>
            <p className="text-2xl font-bold mt-2">₦47,500</p>
            <p className="text-green-500 text-sm mt-2">+8% from last month</p>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Customer ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Contact</th>
                  <th className="text-left py-3 px-4">Orders</th>
                  <th className="text-left py-3 px-4">Total Spent</th>
                  <th className="text-left py-3 px-4">Last Order</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="py-3 px-4">{customer.id}</td>
                    <td className="py-3 px-4">{customer.name}</td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FiMail className="text-gray-400" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiPhone className="text-gray-400" />
                          <span>{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{customer.orders}</td>
                    <td className="py-3 px-4">{customer.totalSpent}</td>
                    <td className="py-3 px-4">{customer.lastOrder}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                          customer.status
                        )}`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FiUser />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
                          <FiShoppingBag />
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

export default AdminCustomers;

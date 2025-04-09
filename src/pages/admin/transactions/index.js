import AdminLayout from "@/components/layout/adminLayout";
import { FiDownload } from "react-icons/fi";

const AdminTransactions = () => {
  const transactions = [
    {
      id: "TRX-001",
      orderId: "ORD-001",
      customer: "John Doe",
      date: "2024-03-15",
      amount: "₦50,000",
      method: "Card",
      status: "Completed",
    },
    {
      id: "TRX-002",
      orderId: "ORD-002",
      customer: "Jane Smith",
      date: "2024-03-14",
      amount: "₦75,000",
      method: "Bank Transfer",
      status: "Completed",
    },
    {
      id: "TRX-003",
      orderId: "ORD-003",
      customer: "Mike Johnson",
      date: "2024-03-13",
      amount: "₦30,000",
      method: "Card",
      status: "Failed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Failed":
        return "bg-red-100 text-red-800";
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
          <h2 className="text-2xl font-semibold">Transactions</h2>
          <div className="flex items-center gap-4">
            <button className="border rounded-full px-4 py-2 flex items-center gap-2">
              <FiDownload />
              Export
            </button>
            <select className="border rounded-full px-4 py-2">
              <option value="all">All Transactions</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold mt-2">₦155,000</p>
            <p className="text-green-500 text-sm mt-2">+12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Successful Transactions</h3>
            <p className="text-2xl font-bold mt-2">2</p>
            <p className="text-green-500 text-sm mt-2">+8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Failed Transactions</h3>
            <p className="text-2xl font-bold mt-2">1</p>
            <p className="text-red-500 text-sm mt-2">+5% from last month</p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Transaction ID</th>
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="py-3 px-4">{transaction.id}</td>
                    <td className="py-3 px-4">{transaction.orderId}</td>
                    <td className="py-3 px-4">{transaction.customer}</td>
                    <td className="py-3 px-4">{transaction.date}</td>
                    <td className="py-3 px-4">{transaction.amount}</td>
                    <td className="py-3 px-4">{transaction.method}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
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

export default AdminTransactions;

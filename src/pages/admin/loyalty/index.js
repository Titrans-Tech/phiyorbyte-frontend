import AdminLayout from "@/components/layout/adminLayout";
import { FiPlus, FiEdit2, FiTrash2, FiUsers } from "react-icons/fi";

const AdminLoyalty = () => {
  const loyaltyPrograms = [
    {
      id: "LP-001",
      name: "Gold Membership",
      pointsPerPurchase: 10,
      discount: "15%",
      minPurchase: "₦10,000",
      members: 150,
      status: "Active",
    },
    {
      id: "LP-002",
      name: "Silver Membership",
      pointsPerPurchase: 5,
      discount: "10%",
      minPurchase: "₦5,000",
      members: 300,
      status: "Active",
    },
    {
      id: "LP-003",
      name: "Bronze Membership",
      pointsPerPurchase: 2,
      discount: "5%",
      minPurchase: "₦2,000",
      members: 500,
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
          <h2 className="text-2xl font-semibold">Loyalty Programs</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
            <FiPlus />
            Create Program
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Programs</h3>
            <p className="text-2xl font-bold mt-2">3</p>
            <p className="text-green-500 text-sm mt-2">+2 from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Active Programs</h3>
            <p className="text-2xl font-bold mt-2">2</p>
            <p className="text-green-500 text-sm mt-2">All running smoothly</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Members</h3>
            <p className="text-2xl font-bold mt-2">950</p>
            <p className="text-green-500 text-sm mt-2">+15% from last month</p>
          </div>
        </div>

        {/* Programs Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Program ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Points/Purchase</th>
                  <th className="text-left py-3 px-4">Discount</th>
                  <th className="text-left py-3 px-4">Min Purchase</th>
                  <th className="text-left py-3 px-4">Members</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loyaltyPrograms.map((program) => (
                  <tr key={program.id} className="border-b">
                    <td className="py-3 px-4">{program.id}</td>
                    <td className="py-3 px-4">{program.name}</td>
                    <td className="py-3 px-4">{program.pointsPerPurchase}</td>
                    <td className="py-3 px-4">{program.discount}</td>
                    <td className="py-3 px-4">{program.minPurchase}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <FiUsers className="text-gray-400" />
                        {program.members}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                          program.status
                        )}`}
                      >
                        {program.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FiEdit2 />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FiTrash2 />
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

export default AdminLoyalty;

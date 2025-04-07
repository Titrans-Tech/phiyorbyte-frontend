import AdminLayout from "@/components/layout/adminLayout";
import { FiPlus, FiEdit2, FiTrash2, FiCopy } from "react-icons/fi";

const AdminCoupons = () => {
  const coupons = [
    {
      id: "CPN-001",
      code: "WELCOME20",
      discount: "20%",
      type: "Percentage",
      minPurchase: "₦5,000",
      validFrom: "2024-03-01",
      validTo: "2024-03-31",
      usage: "45/100",
      status: "Active",
    },
    {
      id: "CPN-002",
      code: "FREESHIP",
      discount: "₦2,000",
      type: "Fixed",
      minPurchase: "₦10,000",
      validFrom: "2024-03-15",
      validTo: "2024-04-15",
      usage: "30/50",
      status: "Active",
    },
    {
      id: "CPN-003",
      code: "SUMMER50",
      discount: "50%",
      type: "Percentage",
      minPurchase: "₦20,000",
      validFrom: "2024-06-01",
      validTo: "2024-06-30",
      usage: "0/200",
      status: "Upcoming",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      case "Upcoming":
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
          <h2 className="text-2xl font-semibold">Coupons</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
            <FiPlus />
            Create Coupon
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Coupons</h3>
            <p className="text-2xl font-bold mt-2">3</p>
            <p className="text-green-500 text-sm mt-2">+1 from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Active Coupons</h3>
            <p className="text-2xl font-bold mt-2">2</p>
            <p className="text-green-500 text-sm mt-2">All running smoothly</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Usage</h3>
            <p className="text-2xl font-bold mt-2">75</p>
            <p className="text-green-500 text-sm mt-2">+25% from last month</p>
          </div>
        </div>

        {/* Coupons Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Coupon ID</th>
                  <th className="text-left py-3 px-4">Code</th>
                  <th className="text-left py-3 px-4">Discount</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Min Purchase</th>
                  <th className="text-left py-3 px-4">Validity</th>
                  <th className="text-left py-3 px-4">Usage</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.id} className="border-b">
                    <td className="py-3 px-4">{coupon.id}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {coupon.code}
                        <button className="text-gray-400 hover:text-gray-600">
                          <FiCopy />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">{coupon.discount}</td>
                    <td className="py-3 px-4">{coupon.type}</td>
                    <td className="py-3 px-4">{coupon.minPurchase}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="text-sm">{coupon.validFrom}</span>
                        <span className="text-sm text-gray-500">to {coupon.validTo}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${
                              (parseInt(coupon.usage.split("/")[0]) /
                                parseInt(coupon.usage.split("/")[1])) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{coupon.usage}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                          coupon.status
                        )}`}
                      >
                        {coupon.status}
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

export default AdminCoupons;

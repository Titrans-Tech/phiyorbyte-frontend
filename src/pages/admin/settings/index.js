import AdminLayout from "@/components/layout/adminLayout";
import { FiSave } from "react-icons/fi";

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
            <FiSave />
            Save Changes
          </button>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Store Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Store Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="Phiyorbyte Store"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="contact@phiyorbyte.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="+234 123 456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Address</label>
                <textarea
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  rows={3}
                  defaultValue="123 Business Street, Lagos, Nigeria"
                />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Payment Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Currency</label>
                <select className="mt-1 block w-full border rounded-md px-3 py-2">
                  <option value="NGN">Nigerian Naira (₦)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Methods</label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Card Payment</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Bank Transfer</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Pay on Delivery</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Shipping Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Rate</label>
                <input
                  type="number"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Free Shipping Threshold
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="50000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Delivery Time</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  defaultValue="3-5 business days"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Notifications
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>New Orders</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Order Updates</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Low Stock Alerts</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMS Notifications</label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Order Confirmations</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Delivery Updates</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;

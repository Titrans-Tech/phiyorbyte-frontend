import AdminLayout from "@/components/layout/adminLayout";
import { FiSave, FiX } from "react-icons/fi";
import { useState } from "react";

const NewCoupon = () => {
  const [formData, setFormData] = useState({
    code: "",
    discountType: "percentage",
    discountValue: "",
    minPurchase: "",
    validFrom: "",
    validTo: "",
    usageLimit: "",
    perCustomerLimit: "",
    categories: [],
    products: [],
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle coupon creation logic here
    console.log("Coupon form submitted:", formData);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Create New Coupon</h2>
          <div className="flex items-center gap-4">
            <button className="border rounded-full px-4 py-2 flex items-center gap-2">
              <FiX />
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <FiSave />
              Save Coupon
            </button>
          </div>
        </div>

        {/* Coupon Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter coupon code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Type</label>
                <select
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Value</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {formData.discountType === "percentage" ? (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">%</span>
                    </div>
                  ) : (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₦</span>
                    </div>
                  )}
                  <input
                    type="number"
                    name="discountValue"
                    value={formData.discountValue}
                    onChange={handleChange}
                    className={`block w-full ${
                      formData.discountType === "percentage" ? "pr-7" : "pl-7"
                    } border rounded-md px-3 py-2`}
                    placeholder={
                      formData.discountType === "percentage" ? "Enter percentage" : "Enter amount"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Usage Rules */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Usage Rules</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Minimum Purchase</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₦</span>
                  </div>
                  <input
                    type="number"
                    name="minPurchase"
                    value={formData.minPurchase}
                    onChange={handleChange}
                    className="block w-full pl-7 border rounded-md px-3 py-2"
                    placeholder="Enter minimum purchase amount"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Usage Limit</label>
                <input
                  type="number"
                  name="usageLimit"
                  value={formData.usageLimit}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter total usage limit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Per Customer Limit
                </label>
                <input
                  type="number"
                  name="perCustomerLimit"
                  value={formData.perCustomerLimit}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter per customer limit"
                />
              </div>
            </div>
          </div>

          {/* Validity Period */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Validity Period</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Valid From</label>
                <input
                  type="date"
                  name="validFrom"
                  value={formData.validFrom}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Valid To</label>
                <input
                  type="date"
                  name="validTo"
                  value={formData.validTo}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Restrictions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Restrictions</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Categories</label>
                <select
                  multiple
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="home">Home & Living</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Products</label>
                <select
                  multiple
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                  <option value="product3">Product 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewCoupon;

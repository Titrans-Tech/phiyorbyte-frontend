import AdminLayout from "@/components/layout/adminLayout";
import { useRouter } from "next/router";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const AdminProducts = () => {
  const router = useRouter();
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Clothing",
      price: "₦10,000",
      stock: 50,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Electronics",
      price: "₦25,000",
      stock: 20,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Accessories",
      price: "₦5,000",
      stock: 0,
      status: "Out of Stock",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Products</h2>
          <button
            onClick={() => router.push("/admin/products/new")}
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            <FiPlus />
            Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3 px-4">#{product.id}</td>
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">{product.price}</td>
                    <td className="py-3 px-4">{product.stock}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
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

export default AdminProducts;

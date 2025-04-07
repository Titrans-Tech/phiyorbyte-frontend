import { useState } from "react";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FiHome,
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiTruck,
  FiDollarSign,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import Link from "next/link";
import { Logo } from "../icons";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { icon: <FiHome />, label: "Dashboard", path: "/admin" },
    { icon: <FiShoppingBag />, label: "Products", path: "/admin/products" },
    { icon: <FiUsers />, label: "Customers", path: "/admin/customers" },
    { icon: <FiPackage />, label: "Orders", path: "/admin/orders" },
    { icon: <FiTruck />, label: "Deliveries", path: "/admin/deliveries" },
    { icon: <FiDollarSign />, label: "Transactions", path: "/admin/transactions" },
    { icon: <FiSettings />, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-black text-white transition-all duration-300 fixed h-full`}
      >
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && <Logo size={100} />}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-800 ${
                router.pathname === item.path ? "bg-gray-800" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {menuItems.find((item) => item.path === router.pathname)?.label || "Dashboard"}
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  3
                </span>
                <FiShoppingBag size={20} />
              </div>
              <button className="flex items-center gap-2">
                <span>Admin</span>
                <FiLogOut />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;

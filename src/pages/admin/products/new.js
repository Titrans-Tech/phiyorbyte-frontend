import AdminLayout from "@/components/layout/adminLayout";
import { FiSave, FiUpload, FiX } from "react-icons/fi";
import { useState } from "react";

const NewProduct = () => {
  const [images, setImages] = useState([]);
  const [variants, setVariants] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  console.log(images, "the images");

  const handleImageRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        id: Date.now(),
        name: "",
        price: "",
        stock: "",
        sku: "",
      },
    ]);
  };

  const removeVariant = (id) => {
    setVariants(variants.filter((variant) => variant.id !== id));
  };

  const handleVariantChange = (id, field, value) => {
    setVariants(
      variants.map((variant) => (variant.id === id ? { ...variant, [field]: value } : variant))
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Create New Product</h2>
          <div className="flex items-center gap-4">
            <button className="border rounded-full px-4 py-2">Cancel</button>
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">
              <FiSave />
              Save Product
            </button>
          </div>
        </div>

        {/* Product Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select className="mt-1 block w-full border rounded-md px-3 py-2">
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="home">Home & Living</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  rows={4}
                  placeholder="Enter product description"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Pricing & Inventory</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Base Price</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₦</span>
                  </div>
                  <input
                    type="number"
                    className="block w-full pl-7 border rounded-md px-3 py-2"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input
                  type="number"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter stock quantity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SKU</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter SKU"
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Product Images</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                  <FiUpload className="text-gray-400 text-3xl mb-2" />
                  <p className="text-sm text-gray-500">
                    Drag and drop images here, or click to select files
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Recommended size: 800x800px</p>
                </label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm"
                    >
                      <FiX className="text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Variants */}
          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Product Variants</h3>
              <button onClick={addVariant} className="text-blue-500 hover:text-blue-700">
                + Add Variant
              </button>
            </div>
            <div className="space-y-4">
              {variants.map((variant) => (
                <div
                  key={variant.id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Variant Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md px-3 py-2"
                      value={variant.name}
                      onChange={(e) => handleVariantChange(variant.id, "name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="number"
                      className="mt-1 block w-full border rounded-md px-3 py-2"
                      value={variant.price}
                      onChange={(e) => handleVariantChange(variant.id, "price", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Stock</label>
                    <input
                      type="number"
                      className="mt-1 block w-full border rounded-md px-3 py-2"
                      value={variant.stock}
                      onChange={(e) => handleVariantChange(variant.id, "stock", e.target.value)}
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => removeVariant(variant.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter weight"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Dimensions (cm)</label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <input
                    type="number"
                    className="block w-full border rounded-md px-3 py-2"
                    placeholder="Length"
                  />
                  <input
                    type="number"
                    className="block w-full border rounded-md px-3 py-2"
                    placeholder="Width"
                  />
                  <input
                    type="number"
                    className="block w-full border rounded-md px-3 py-2"
                    placeholder="Height"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter brand name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md px-3 py-2"
                  placeholder="Enter tags (comma separated)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewProduct;

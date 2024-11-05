export const ProductImagePreview = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((arr, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] rounded-md border border-black bg-[whitesmoke] "
          ></div>
        ))}
      </div>
      <div className="w-full bg-[whitesmoke] h-[50vh] rounded-md"></div>
    </div>
  );
};

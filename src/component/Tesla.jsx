const Tesla = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Tesla Cars</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white text-black p-4">
        <h3 className="text-xl font-bold">Model S</h3>
        <img
          src="/public/omazlvtr.png"
          alt="Model S"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-gray-200 text-black p-4">
        <h3 className="text-xl font-bold">Model 3</h3>
        <img
          src="/public/omazlvtr.png"
          alt="Model 3"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-red-700 text-white p-4">
        <h3 className="text-xl font-bold">Model X</h3>
        <img
          src="/public/omazlvtr.png"
          alt="Model X"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
    </div>
  </div>
);

export default Tesla;

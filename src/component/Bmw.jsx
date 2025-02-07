const BMW = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">BMW Cars</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-black text-white p-4">
        <h3 className="text-xl font-bold">X5</h3>
        <img
          src="/public/1jmgbw1s.png"
          alt="X5"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-gray-700 text-white p-4">
        <h3 className="text-xl font-bold">M3</h3>
        <img
          src="/public/1jmgbw1s.png"
          alt="M3"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-blue-300 text-black p-4">
        <h3 className="text-xl font-bold">i8</h3>
        <img
          src="/public/1jmgbw1s.png"
          alt="i8"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
    </div>
  </div>
);

export default BMW;

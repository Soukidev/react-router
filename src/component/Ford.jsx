const Ford = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Ford Cars</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-red-500 text-white p-4">
        <h3 className="text-xl font-bold">Mustang</h3>
        <img
          src="/public/corudopj.png"
          alt="Mustang"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-blue-500 text-white p-4">
        <h3 className="text-xl font-bold">F-150</h3>
        <img
          src="/public/corudopj.png"
          alt="F-150"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
      <div className="bg-green-500 text-white p-4">
        <h3 className="text-xl font-bold">Focus</h3>
        <img
          src="/public/corudopj.png"
          alt="Focus"
          className="w-full h-40 object-cover mt-2"
        />
      </div>
    </div>
  </div>
);

export default Ford;

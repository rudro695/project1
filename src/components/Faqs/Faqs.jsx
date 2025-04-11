

const Faqs = () => {
    return (
        <div>
            <div className="border rounded-md">
      <div className="flex items-center bg-cyan-400 text-white px-4 py-2">
        <span className="text-2xl font-bold mr-4">{isOpen ? "−" : "+"}</span>
        <p className="font-medium">{question}</p>
      </div>
      {isOpen && (
        <div className="bg-gray-100 px-6 py-4 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          hendrerit elit turpis, a porttitor tellus sollicitudin at. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
      )}
    </div>
        </div>
    );
};

export default Faqs;
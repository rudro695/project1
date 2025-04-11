import React from 'react';

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      
      
<div className="flex flex-col items-center text-center border p-4 rounded-xl shadow">
  <img
    src="https://i.ibb.co.com/KcckXL7S/tip-image.jpg"
    alt="Doctor"
    className="w-56 h-56 object-cover rounded-full mb-4"
  />
  <h3 className="font-bold">
    Drew Stronghold, <span className="font-normal text-gray-500">MPH</span>
  </h3>
  <p className="italic text-sm text-gray-500">Medicine, Surgery</p>
</div>


      
      <div className="space-y-4">
        <h2 className="font-bold text-lg">How to live a healthy lifestyle?</h2>
        <p className="text-gray-600 text-sm">
          Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh...
        </p>
        <ul className="space-y-2 text-sm">
          <li>➤ Don’t just worry about the things you cannot help.</li>
          <li>➤ Eat healthy, work better, do gardening.</li>
          <li>➤ Some relationships can kill you. Avoid them at the most.</li>
          <li>➤ Focus on the good things that you like.</li>
          <li>➤ Eat healthy, work better, do gardening.</li>
        </ul>
        <p className="text-gray-600 text-sm">
          Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales...
        </p>
      </div>

      
      <div className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold text-cyan-600">📅 Book an Appointment</h3>
        <select className="w-full border p-2 rounded">
          <option>Select Department</option>
        </select>
        <input type="text" placeholder="Your First Name (required)" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Your Last Name" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Your Phone (required)" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <input type="date" className="w-full border p-2 rounded" />
        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded">
          SUBMIT
        </button>
      </div>

    </div>
  );
};

export default Blogs;

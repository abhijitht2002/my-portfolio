import React from "react";

function Contact() {
  return (
    
      <div className="hidden lg:flex max-w-xs w-full bg-white p-4 flex-col shadow-sm rounded-xl gap-3">
        <input
          type="text"
          placeholder="type your name"
          className="border border-gray-300 p-2 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="type your email"
          className="border border-gray-300 p-2 rounded-md text-sm"
        />
        <textarea
          name=""
          id=""
          placeholder="type the message"
          className="border border-gray-300 p-2 rounded-md min-h-[80px] text-sm"
        ></textarea>
        <button className="bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600 hover:cursor-pointer transition">Submit</button>
      </div>
    
  );
}

export default Contact;

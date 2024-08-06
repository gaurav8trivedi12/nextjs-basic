'use client';
import React from 'react';

const ContactUsForm = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.href = 'mailto:info@reviud.com'}
      >
        Get Reviews
      </button>
    </div>
  );
};

export default ContactUsForm;

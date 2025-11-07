
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ganesh Studio. All Rights Reserved.</p>
        <p className="text-sm mt-1">Website designed with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;

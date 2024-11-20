import React from 'react';
import '../text.css'; // Make sure to import your font CSS file

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#66FCF1] to-[#45A29E] bg-clip-text text-transparent font-collegefont">
        JERUSALEM COLLEGE OF ENGINEERING
      </h1>
      <br />
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 bg-gradient-to-r from-[#66FCF1] to-[#C5C6C7] bg-clip-text text-transparent font-collegefont">
        Department Of Computer Science Engineering
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 bg-gradient-to-r from-[#66FCF1] to-[#C5C6C7] bg-clip-text text-transparent font-collegefont">
        Presents
      </h2>
      <br />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#66FCF1] to-[#C5C6C7] bg-clip-text text-transparent font-collegefont">
        CELESTIA '24
      </h1>
    </div>
  );
}

export default CollegeName;

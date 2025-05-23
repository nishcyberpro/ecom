import React from "react";

const categories = [
  { name: "Fruits & Vegetables", link: "/" },
  { name: "Meat & Fish", link: "/" },
  { name: "Dairy & Eggs", link: "/" },
  { name: "Bakery", link: "/" },
];
const SubNav = () => {
  return (
    <div className="flex items-center justify-between  h-[40px] w-full border-b-1 border-[#e7e7e7] max-sm:hidden">
      {/* left menu */}
      <div>
        <ul className="flex items-center gap-4 text-[14px] font-bold text-[#6B7280] max-md:text-[10px]">
          {categories.map((category, index) => (
            <li key={index}>{category.name}</li>
          ))}
        </ul>
      </div>
      {/* right menu */}
      <div>
        <ul className="flex items-center gap-4 text-[14px] font-bold text-[#6B7280] max-md:text-[10px] pr-2">
          <li>New Arrivals</li>
          <li>Trending Product</li>
          <li>Sale</li>
        </ul>
      </div>
    </div>
  );
};

export default SubNav;

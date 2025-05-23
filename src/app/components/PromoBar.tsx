import React from "react";

const PromoBar = () => {
  return (
    <div className="flex w-full bg-primary h-[41px] text-white ">
      <div className="flex max-w-[1000px] w-full mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="text-[12px] max-sm:text-[10px]">
            Free shipping on orders over $50
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] max-sm:text-[10px] font-inter">
            Promo Code: FREESHIP
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;

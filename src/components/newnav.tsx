import React from "react";

export const NewNavbar = (): JSX.Element => {
  return (
    <div className="w-auto h-[94px] bg-variable-collection-navbar">
      <div className="flex w-auto h-[94px] items-center justify-between relative">
        <div className="flex w-[182px] items-center justify-around gap-2.5 relative">
          <div className="relative w-[182px] h-[60px] mt-[-1.00px] font-navbar-h1 font-[number:var(--navbar-h1-font-weight)] text-variable-collection-BG text-[length:var(--navbar-h1-font-size)] text-center tracking-[var(--navbar-h1-letter-spacing)] leading-[var(--navbar-h1-line-height)] [font-style:var(--navbar-h1-font-style)]">
            WyunaSep
          </div>
        </div>
        <div className="flex w-[528px] h-[69px] items-center justify-center px-2.5 py-0 relative">
          <div className="relative w-[182px] h-[60px] ml-[-5.00px] font-navbar-h2 font-[number:var(--navbar-h2-font-weight)] text-variable-collection-BG text-[length:var(--navbar-h2-font-size)] text-center tracking-[var(--navbar-h2-letter-spacing)] leading-[var(--navbar-h2-line-height)] [font-style:var(--navbar-h2-font-style)]">
            About Us
          </div>
          <div className="relative w-[182px] h-[60px] ml-[-70px] font-navbar-h2 font-[number:var(--navbar-h2-font-weight)] text-variable-collection-BG text-[length:var(--navbar-h2-font-size)] text-center tracking-[var(--navbar-h2-letter-spacing)] leading-[var(--navbar-h2-line-height)] [font-style:var(--navbar-h2-font-style)]">
            Products
          </div>
          <div className="relative w-[182px] h-[60px] ml-[-70px] font-navbar-h2 font-[number:var(--navbar-h2-font-weight)] text-variable-collection-BG text-[length:var(--navbar-h2-font-size)] text-center tracking-[var(--navbar-h2-letter-spacing)] leading-[var(--navbar-h2-line-height)] [font-style:var(--navbar-h2-font-style)]">
            Blog
          </div>
          <div className="relative w-[182px] h-[60px] mr-[-5.00px] ml-[-70px] font-navbar-h2 font-[number:var(--navbar-h2-font-weight)] text-variable-collection-BG text-[length:var(--navbar-h2-font-size)] text-center tracking-[var(--navbar-h2-letter-spacing)] leading-[var(--navbar-h2-line-height)] [font-style:var(--navbar-h2-font-style)]">
            Get Quote
          </div>
        </div>
      </div>
    </div>
  );
};

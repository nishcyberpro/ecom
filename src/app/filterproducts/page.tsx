import React from "react";
import Navbar1 from "../components/Navbar1";
import SubNav from "../components/SubNav";
import Filters from "../components/Filters";
import Container from "../containers/Container";

const page = () => {
  return (
    <div>
      <Navbar1 />
      <div className="flex w-screen items-center justify-center">
        <div className="flex  self-center w-full max-w-[1400px]  items-start justify-center mt-2 gap-4">
          <div className="flex w-full max-w-[1400px] items-center justify-start gap-4 flex-col">
            {/* <SideMenu /> */}
            <SubNav />
          </div>
        </div>
      </div>
      <Container widthClass="max-w-[1400px] mt-4 max-sm:mt-16 flex  gap-2 ">
        <div className=" md:w-2/5 lg:w-[25%] max-sm:hidden ">
          <Filters />
        </div>
        <div className="w-full md:3/5 bg-yellow-200">
          <Filters />
        </div>
      </Container>
    </div>
  );
};

export default page;

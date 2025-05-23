import Image from "next/image";
import Navbar1 from "./components/Navbar1";
import PromoBar from "./components/PromoBar";
import SubNav from "./components/SubNav";
import SideMenu from "./components/SideMenu";
import Banner1 from "./components/Banner1";
import PromoBlock1 from "./components/PromoBlock1";
import Container from "./containers/Container";
import Newarrivals from "./components/Newarrivals";
import Featured from "./components/Featured";
import BestSeller from "./components/Bestseller";
import Footer from "./components/Footer";
import MobileMenu from "./components/Mobilemenu";
import { useState } from "react";
import MyThemeNavBar from "./theme/Navbar";

export default function Home() {
  return (
    <div className="">
      <PromoBar />
      <Navbar1 />

      <div className="flex w-screen items-center justify-center">
        <div className="flex  self-center w-full max-w-[1400px]  items-start justify-center mt-2 gap-4">
          {/* <SideMenu /> */}
          <div className="flex w-full max-w-[1400px] items-center justify-start gap-4 flex-col">
            {/* <SideMenu /> */}
            <SubNav />
            <Banner1 />
          </div>
        </div>
      </div>
      <Container widthClass="max-w-[1400px] mt-4  ">
        <PromoBlock1 />
      </Container>
      <Container widthClass="max-w-[1400px] mt-4 px-4">
        <Newarrivals category="New Arrivals" />
      </Container>

      <Container widthClass="max-w-[1400px] mt-4 px-4 ">
        <Featured />
      </Container>
      <Container widthClass="max-w-[1400px] mt-4 px-4">
        <BestSeller />
      </Container>
      <Container widthClass="max-w-[1400px] mt-4 px-4">
        <Newarrivals category="Cushion & Covers" />
      </Container>
      <Container widthClass="max-w-[1400px] mt-4 px-4">
        <Newarrivals category="Printed Tshirts" />
      </Container>
      <Container widthClass="max-w-[1400px] mt-4 px-4">
        <Newarrivals category="Photo Frames" />
      </Container>
      <Footer />
      <MobileMenu filter={false} />
    </div>
  );
}

"use client";
import Footer from "@/app/components/Footer";
import MobileMenu from "@/app/components/Mobilemenu";
import Navbar1 from "@/app/components/Navbar1";
import Newarrivals from "@/app/components/Newarrivals";
import SingleProduct from "@/app/components/SingleProduct";
import Container from "@/app/containers/Container";
import { usePathname } from "next/navigation";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FilteredProductById = () => {
  const pathname = usePathname();
  const productName = pathname.split("/").pop(); // Extract product name from the URL

  return (
    <div>
      <Navbar1 />
      <Container widthClass="max-w-[1400px] mt-4 ">
        <SingleProduct title={productName || "Default Title"} />
        <Newarrivals category="New Arrivals" />
      </Container>
      <Footer />
      <MobileMenu filter={true} />
    </div>
  );
};

export default FilteredProductById;

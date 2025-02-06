// DomesMain.jsx

import React from "react";
import Nav1 from "../../src/components/Products/DomesticPage/Nav1";
import { Nav2 } from "../../src/components/Products/DomesticPage/Nav2";
import { Hero } from "../../src/components/Products/DomesticPage/Hero";
import { Shipping_Map } from "../../src/components/Products/DomesticPage/Shipping_Map";
import { Technology } from "../../src/components/Products/DomesticPage/Technology";
import { TopOffer } from "../../src/components/Products/DomesticPage/TopOffer";
import { CheckDemo } from "../../src/components/Products/DomesticPage/CheckDemo";
import { ShipRocEcommerce } from "../../src/components/Products/DomesticPage/ShipRocEcommerce";
import { Shipsecurity } from "../../src/components/Products/DomesticPage/Shipsecurity";
import Footer from "../components/Footer";
import { MultiplePickLoca } from "../../src/components/Products/DomesticPage/MultiplePickLoca";
import { BrandTracking } from "../../src/components/Products/DomesticPage/BrandTracking";
import { CentralizeDashBorad } from "../../src/components/Products/DomesticPage/CentralizeDashBorad";
import { CodRemittance } from "../../src/components/Products/DomesticPage/CodRemittance";
import { EasyReturn } from "../../src/components/Products/DomesticPage/EasyReturn";
import { InternationalShipping } from "../../src/components/Products/DomesticPage/InternationationalShiping";
import { ShippingGrowth } from "../../src/components/Products/DomesticPage/ShippingGrowth";
import { AppPocket } from "../../src/components/Products/DomesticPage/AppPocket";
import { CustomerSaying } from "../../src/components/Products/DomesticPage/CustomerSaying";
import { TrustedBy } from "../../src/components/Products/DomesticPage/TrustedBy";
import { HowWorks } from "../../src/components/Products/DomesticPage/HowWorks";
import { ExploreBlog } from "../../src/components/Products/DomesticPage/ExploreBlog";
import { AlwaysStay } from "../../src/components/Products/DomesticPage/AlwaysStay";

function DomesMain() {
  return (
    <div>
      {/* top section/ offer */}
      <TopOffer />
      {/* Main Content */}
      <div className="relative max-w-full overflow-hidden">
        {/* Skewed Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100 to-orange-100 -z-10 transform -skew-y-4 origin-top-left"></div>

        {/* Main Content (Not Skewed) */}
        <div className="relative max-w-full mx-8 pb-8">
          <Nav1 />
          <Nav2 />
          <Hero />
        </div>
      </div>

      {/* Sections */}
      <Shipping_Map />
      <Technology />
      <CheckDemo />
      <ShipRocEcommerce />
      <Shipsecurity />
      <MultiplePickLoca />
      <BrandTracking />
      <CentralizeDashBorad />
      <CodRemittance />
      <EasyReturn />
      <InternationalShipping />
      <ShippingGrowth />
      <AppPocket />
      <CustomerSaying />
      <TrustedBy />
      <HowWorks />
      <ExploreBlog />
      <AlwaysStay />
      
      <Footer />
    </div>
  );
}

export default DomesMain;  // Default export

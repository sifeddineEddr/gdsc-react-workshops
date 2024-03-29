import React from "react";
import MiniHeader from "../commons/MiniHeader";
import { shopSectionData } from "../../assets/siteData";
import Section from "./Section";

export default function ShopSection() {
  return (
    <div className="flex flex-col gap-8">
      <MiniHeader
        heading="Shop our latest offers and categories"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shopSectionData.map((data) => (
          <Section {...data} />
        ))}
      </div>
    </div>
  );
}

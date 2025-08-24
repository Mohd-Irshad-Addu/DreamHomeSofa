import React from "react";
import ServiceCard from "../components/ServiceCard"; // ✅ Import reusable card

function Services() {
  const servicesData = [
  {
    img: "/seviceCard/sofa-repair-near-me2.jpg",
    title: "Sofa Repair",
    desc: "Restore your sofa's comfort and look with our expert repair service.",
  },
  {
    img: "/seviceCard/curtain.jpeg",
    title: "Curtains",
    desc: "Custom curtains to match your interior and style.",
  },
   {
    img: "/seviceCard/sofa_cleaning.jpg",
    title: "Sofa Cleaning",
    desc: "Deep cleaning to make your sofa look brand new again.",
  },
  {
    img: "/seviceCard/custom sofa maker 3.jpeg",
    title: "Custom Sofa Manufacturing",
    desc: "Get a sofa designed exactly the way you imagine it.",
  },
 
  {
    img: "/seviceCard/headboard.jpeg",
    title: "Head Board Works",
    desc: "Design and installation of stylish and sturdy headboards.",
  },
  
  {
    img: "/seviceCard/mattress.jpg",
    title: "Mattress",
    desc: "High-quality mattresses for comfort and durability.",
  },
  {
    img: "/seviceCard/lining.jpg",
    title: "Lining Works",
    desc: "Professional lining services for sofas and furniture.",
  },
];


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;

import React from "react";

const footer_component = () => {
  return (
    <div>
      <section className="bg-[#092040] w-full h-full flex flex-col rounded-t-[100px]">
        <div className="flex flex-col items-center justify-center px-24 py-24">
          <p className="text-white font-light text-xl mb-4">
            email: hello@tbnalliance.org
          </p>
          <p className="text-white font-light text-xl ">
            Copyright © 2024 - Transformational Business Network (TBN) Alliance
            - All rights reserved.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default footer_component;

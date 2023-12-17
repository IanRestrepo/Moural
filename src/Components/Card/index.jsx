import React from "react";

export const Card = ({ ProductImg, ProductTitle, ProductPrice }) => {
  return (
    <div className="flex-row w-64 max-h-80 rounded-xl overflow-hidden bg-black ">
      <figure className="">
        <img src={ProductImg} alt={ProductTitle}  className="w-full h-[156px]"/>
      </figure>
      <section className="py-3 px-3 flex-row bg-black text-white leading-3">
        <h3 className='font-extrabold text-2xl'>{ProductTitle}</h3>
        <small className="text-gray-500">{"$" + ProductPrice}</small>
      </section>

      <button className='text-center mx-auto my-auto bg-[#C0FF0C] w-full mt-2 py-3 font-extrabold uppercase cursor-pointer text-black'>Add to cart</button>
    </div>
  );
};

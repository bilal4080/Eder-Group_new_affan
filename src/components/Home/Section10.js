'use client'
import { Carousel } from "antd";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
const Section10 = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Mrs Sami",
      rating: 4.5,
      image: "/people-1.png",
      date: "11 March 2023",
      content:
        "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
    },
    {
      name: "Mrs Aliya",
      rating: 4.5,
      date: "11 March 2023",
      image: "/people-2.png",
      content:
        "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
    },
    {
      name: "Mrs Rafay",
      rating: 4.5,
      date: "11 March 2023",
      image: "/people-3.png",
      content:
        "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
    },
    {
        name: "Mrs Sami",
        rating: 4.5,
        image: "/people-1.png",
        date: "11 March 2023",
        content:
          "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
      },
      {
        name: "Mrs Aliya",
        rating: 4.5,
        date: "11 March 2023",
        image: "/people-2.png",
        content:
          "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
      },
      {
        name: "Mrs Rafay",
        rating: 4.5,
        date: "11 March 2023",
        image: "/people-3.png",
        content:
          "Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest Warenlagern versenden möchtestWarenlagern versenden möchtest",
      },
    // Add more review objects as needed
  ]);
  return (
    <>
      <div
        data-aos="flip-up"
        className="mx-auto text-center mt-24 max-w-screen-xl px-8 "
      >
        <h1 className="my-3 text-2xl  lg:text-6xl capitalize min-[1800px]:text-7xl font-semibold">
          Don't just take our word for it
        </h1>
        <p className="leading-relaxed md:text-2xl ">
          Egal, ob Du aus einem oder mehreren Warenlagern versenden möchtest
          Warenlagern versenden möchtestWarenlagern versenden möchtest
        </p>
      </div>
      <Carousel autoplay>
        {reviews.map((review, index) => (
          <div key={index}>
            <div
              className={`flex de-active flex-col max-w-screen-xl xl:mx-auto md:mx-12 mt-16 mb-10 justify-start items-start gap-4 px-12 py-8 ${
                index === 1 ? "scale-y-105" : ""
                }`}
            >
              <div className="flex justify-between items-center w-full gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={review.image}
                    className="h-12 w-12 dark:text-white rounded-full"
                    alt={`Review by ${review.name}`}
                  />
                  <h3 className="text-lg dark:text-white md:text-2xl font-bold">
                    {review.name}
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <h5 className=" dark:text-white">{review.rating}</h5>
                  <IoStar className="text-yellow-600" />
                </div>
              </div>
              <p className="text-md  dark:text-white">{review.content}</p>
              <div className="flex justify-end items-end w-full">
                <p className=" dark:text-white">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Section10;

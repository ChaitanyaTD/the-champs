import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import herobg from "../../assets/herobg.jpg";
import profile from "../../assets/user.jpg";
import { IoCopyOutline } from "react-icons/io5";
import { FiLink, FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { BsFileText } from "react-icons/bs";
const SingleNFT = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy =
    "5gojq-7zyol-kqpfn-vett2-e6at4-2wmg5-wyshc-ptyz3-t7pos-okakd-7qe";
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const sampleData = [
    {
      title: "Product 1",
      category: "Category A",
      status: "Active",
      price: "$10",
      inventory: 100,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=740&t=st=1713351871~exp=1713352471~hmac=ed679c41842035c86855182a5cdfd9b4317fac54471101d127d87f9cdd467412", // Sample NFT image link
      slug: "product-1",
    },
    {
      title: "Product 2",
      category: "Category B",
      status: "Paused",
      price: "$20",
      inventory: 50,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-virtual-sports-illustration_23-2150581118.jpg?t=st=1713351989~exp=1713355589~hmac=121e9e0f3087dd1846af2c6832cffff96815d1016baa128800f8ef2bd443f93e&w=740", // Sample NFT image link
      slug: "product-2",
    },
  ];
  return (
    <div className="mx-4 md:py-8 md:px-6 p-2 flex flex-col dark:text-[#e0e0e0] text-[#676767] dark:bg-[#2e2e48] bg-[#fff] shadow-2xl dark:shadow-[#323257] rounded-t-2xl mt-6">
      <div className="">
        <div className="flex gap-2 w-full">
          <div className="dark:bg-[#2e2e48] bg-[#fff] w-[360px] px-4 pt-4 pb-10 rounded-2xl shadow-2xl  mx-6">
            <div style={{ height: "300px" }} className="relative">
              <img
                src={profile}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className=" flex items-center mt-3 justify-center">
                <div className="flex gap-4 items-center justify-evenly text-lg text-[#FC001E]">
                  <FaXTwitter />
                  <FaLinkedin />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mt-10">
            <div className="flex flex-col   mb-4">
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-2xl font-semibold line-clamp-1 ">
                  Single NFT name
                </h1>
                <h4>Listed April 2024</h4>
              </div>
              <div className="flex  gap-6 items-center">By Ritesh</div>
            </div>
            <h1 className="text-2xl font-semibold pb-2"> Detail</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              temporibus quod reprehenderit sapiente at id et, vel possimus
              deserunt magni!
            </p>
            <div className="flex gap-4  justify-between mt-6">
              <button className="uppercase bg-[#fff] font-semibold text-sm md:text-[20px]  dark:bg-[#2e2e48]  flex items-center justify-start gap-3 py-2 px-2 md:px-4 md:py-2 rounded-xl  ">
                $ 08.00
              </button>

              <button className="uppercase text-sm md:text-[16px] bg-gradient-to-r from-red-500 to-[#FF7D57] shadow-md   flex items-center justify-start gap-3 py-2 px-2 md:px-4 md:py-2 rounded-xl text-[#ffffff] bg:text-[#e1e1e1] ">
                Update price
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%]  mx-auto mt-10 border border-red-500 px-4 py-4">
        <div className="font-semibold flex items-center gap-4 mb-4">
          <h1>Detail </h1>{" "}
          <div className="flex gap-2 text-lg  items-center">
            <FiLink />
            <p className="text-red-500 line-clamp-1"> view on chain </p>
          </div>
          <div className="flex gap-2 text-lg  items-center">
            <RxAvatar />
            owner:
            <p className="text-red-500"> dffds... </p>
          </div>
          <div className="flex gap-2 text-lg  items-center">
            <BsFileText />

            <p className="text-red-500"> Licence </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sequi.
          Beatae, nesciunt sint iure quam assumenda ipsam, porro rerum eius
          eligendi voluptatibus maxime voluptates iusto dicta. Impedit, optio
          perferendis! Minus, nulla ea hic amet ratione ullam debitis fugit
          ducimus, optio adipisci eum blanditiis asperiores neque cum tenetur
          earum porro at distinctio quod officia. Consectetur, vel eligendi.
        </p>
        <div className="grid grid-cols-3 mt-4 gap-4">
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
          <div className="shadow-2xl rounded-2xl flex flex-col items-center ">
            <div className="bg-gray-200 w-full text-center text-black rounded-t-2xl">
              flower
            </div>
            <div className="p-4 text-lg">Dimond</div>
          </div>
        </div>
      </div>

      <div className="px-16 shadow-md mt-10 py-6">
        <div className="flex  justify-between ">
          <h1 className="text-xl">Activity</h1>
          <select
            className="dark:text-[#e0e0e0] px-2 py-1 rounded-md text-[#676767] dark:bg-[#2e2e48] bg-[#fff] border border-[#FF7D57] outline-none"
            name=""
            id=""
          >
            <option value="">Last day</option>
            <option value="">Last 7 days</option>
            <option value="">Last 30 days</option>
            <option value="">Last month</option>
          </select>
        </div>
        <div className="flex justify-between  border border-red-500 px-6 py-1 mt-10">
          <h2>MINT#</h2>
          <h2>NRI</h2>
          <h2>PRICE</h2>
          <h2>TIME</h2>
        </div>
        <div className="flex justify-between  shadow-2xl px-6 py-2 mt-10">
          <h2>254#</h2>
          <h2>-</h2>
          <h2>$ 5.62</h2>
          <h2>3 Months</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleNFT;
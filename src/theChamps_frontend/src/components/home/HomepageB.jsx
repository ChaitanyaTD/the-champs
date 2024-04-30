/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ Imports.
/* ----------------------------------------------------------------------------------------------------- */
import "react-multi-carousel/lib/styles.css";
import soccer1 from "../../assets/images/soccer-1.jpeg";
import CustomButton from "../common/CustomButton";
import { MdArrowOutward } from "react-icons/md";
import FancyHeader from "../common/FancyHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Pagination, Navigation, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import CollectionApi from "../../api/CollectionApi";
import { useEffect, useState } from "react";
import NFTApi from "../../api/NftApi";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <HomePageB /> : Soccer collection.
/* ----------------------------------------------------------------------------------------------------- */
const HomePageB = () => {
  const { getAllCollections, collections } = CollectionApi();
  const { getCollectionWiseNFT, NFTlist, nftLoading } = NFTApi();
  const [numColumns, setNumColumns] = useState(2);
  const [finalLoading, setFinalLoading] = useState(true);

  const updateBreakpoints = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setNumColumns(4);
    } else if (width >= 768) {
      setNumColumns(3);
    } else {
      setNumColumns(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateBreakpoints);
    updateBreakpoints();
    return () => window.removeEventListener("resize", updateBreakpoints);
  }, []);

  // Effect hook get collection onLoad;
  useEffect(() => {
    getAllCollections();
  }, []);

  // Effect hook extract nft from collection
  useEffect(() => {
    if (collections && collections.length > 0) {
      getCollectionWiseNFT(collections[0].canister_id)
        .then(() => {
          setFinalLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching NFT for the first collection:", err);
          setFinalLoading(false);
        });
    }
  }, [collections]);

  return (
    <div className="md:p-24 max-md:p-6 flex flex-col gap-8">
      <div className="flex gap-2 max-md:flex-col">
        <FancyHeader normal="Champ's" />
        <FancyHeader fancy="Special Collection of 20 Footballers" small />
      </div>
      {finalLoading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-8 gap-x-8 gap-y-8">
          {Array.from({ length: numColumns }).map((_, index) => (
            <CollectionLoader key={index} />
          ))}
        </div>
      ) : collections && collections.length === 0 ? (
        <div>No Collections Available</div>
      ) : (
        <div>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Grid, Pagination, Navigation, Keyboard]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              768: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            className="mySwiper"
          >
            {NFTlist?.map((NFT, index) => (
              <SwiperSlide key={index}>
                <NFTCard key={index} NFT={NFT} collection={collections} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <span className="flex justify-center gap-4 py-6">
        <CustomButton>
          View collections <MdArrowOutward size={24} />{" "}
        </CustomButton>
      </span>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <NFTCard /> : collection card.
/* ----------------------------------------------------------------------------------------------------- */
const NFTCard = ({ NFT, collection }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = NFT.metadata.map((item) => item.key_val_data);
    // console.log("This console is coming from HOMEPAGE B  NFT:", NFT);
    // console.log(Object.values(img));
  }, [NFT]);

  return (
    <motion.div
      whileHover={{ translateY: -15 }}
      className="flex flex-col gap-4 cursor-pointer"
    >
      <img src={soccer1} alt="image" className="rounded-2xl object-contain" />
      <div className="flex flex-col">
        <h1 className="text-[28px] font-bold line-clamp-1">
          {NFT.owner.toText()}
        </h1>
        {/* Static collection pick for now we can show featured later */}
        <p className="text-[15px] text-[#7B7583]">
          By {collection[0].data.name}
        </p>
      </div>
    </motion.div>
  );
};

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <CollectionLoader /> : colletion card loader.
/* ----------------------------------------------------------------------------------------------------- */
function CollectionLoader() {
  return (
    <div className="grid grid-rows-6 gap-y-4 animate-pulse">
      <div className="skeleton row-span-4 rounded-2xl"></div>
      <div className="flex flex-col gap-2">
        <div className="skeleton rounded-md min-h-8 w-10/12"></div>
        <div className="skeleton rounded-md min-h-5 w-9/12"></div>
      </div>
    </div>
  );
}
export default HomePageB;

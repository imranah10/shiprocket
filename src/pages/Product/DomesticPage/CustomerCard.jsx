import React, { useState } from "react";
import icon1 from "../../../assets/Domestic/cars.png";
import icon2 from "../../../assets/Domestic/car2.png";
import icon3 from "../../../assets/Domestic/car3.png";
import icon4 from "../../../assets/Domestic/car4.png";
import icon5 from "../../../assets/Domestic/car5.png";
import { IoIosArrowDropright } from "react-icons/io";

const data = [
  {
    img: icon1,
    desc: (
      <>
        How Car 101 Is Scaling Their <br />
        Business Using Shiprocket
      </>
    ),
  },
  {
    img: icon2,
    desc: (
      <>
        Growth Journey Of Little <br /> Rituals With Shiprocket
      </>
    ),
  },
  {
    img: icon3,
    desc: (
      <>
        Shiprocket In Conversation <br /> With Rimpi Juneja, Founder,
        <br /> Fuaark
      </>
    ),
  },
  {
    img: icon4,
    desc: (
      <>
        How Arata Simplified Their <br /> Post Purchase Process Using <br />
        Shiprocket
      </>
    ),
  },
  {
    img: icon5,
    desc: (
      <>
        Shiprocket, In Conversation <br /> With Desiree Pereira, Co- <br />
        Founder – Disguise <br /> Cosmetics
      </>
    ),
  },
];

const videoURL = "https://www.youtube.com/embed/F2RnxZnubCM";

const Card = ({ img, desc }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#6A54CB] h-[360px] p-6 rounded-xl shadow-lg flex justify-between items-center relative">
      <div className="space-y-4">
        <img className="w-40 object-contain" src={img} alt="img" />
        <h1 className="text-5xl font-semibold text-white">{desc}</h1>
      </div>

      <div className="mr-40">
        <button
          onClick={() => setShowVideo(true)}
          className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 rounded-full mt-4 transition-transform duration-300 hover:scale-110"
        >
          <IoIosArrowDropright className="w-20 h-20" />
        </button>
      </div>

      {/* Video Modal ( Transparent) */}
      {showVideo && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <iframe
              width="700"
              height="600"
              src={videoURL}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

const Car1 = () => <Card img={data[0].img} desc={data[0].desc} />;
const Car2 = () => <Card img={data[1].img} desc={data[1].desc} />;
const Car3 = () => <Card img={data[2].img} desc={data[2].desc} />;
const Car4 = () => <Card img={data[3].img} desc={data[3].desc} />;
const Car5 = () => <Card img={data[4].img} desc={data[4].desc} />;

export { Car1, Car2, Car3, Car4, Car5 };

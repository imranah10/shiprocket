import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import cargologo from '../../../assets/images/CargoX/cargox.svg'

export const Cnav2 = () => {
  const [scroll, setScroll] = useState(false);
  const [hideNavlinks, setHideNavlinks] = useState(false);
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      setHideNavlinks(window.innerWidth < 1024 && window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag-to-Scroll Functionality
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
    };

    const stopDragging = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const drag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseleave", stopDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mousemove", drag);

    return () => {
      slider.removeEventListener("mousedown", startDragging);
      slider.removeEventListener("mouseleave", stopDragging);
      slider.removeEventListener("mouseup", stopDragging);
      slider.removeEventListener("mousemove", drag);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center   gap-x-4 mt-5 transition-all duration-300 ${
        scroll
          ? "fixed top-0 z-50  w-[100%] py-2 px-2  sm:w-[91%]    md:w-[93%] lg:w-[95%] bg-[#F9F7FB] rounded-full shadow-lg"
          : "-top-2 bg-transparent"
      }`}
    >
      <div>
        <a href="/" className=" text-gray-500 hover:text-gray-700">
          <img
            className=" w-[100px]   h-[40px]  sm:max-w-[120px] sm:h-auto"
            src={cargologo}
            alt="CargoxLogo"
          />
        </a>
      </div>

      



      {/* Links (Horizontally Scrollable on Small Screens) */}
        <div className="flex">
        <div
        ref={scrollRef}
        className={`flex overflow-x-auto items-center text-[#0B0757] lg:overflow-visible whitespace-nowrap scroll-smooth cursor-grab space-x-2 px-4 transition-opacity duration-300 ${
          hideNavlinks ? "opacity-0 md:opacity-100" : "opacity-100"
        }`}
      >
        {!hideNavlinks && (
          <>
            <Link className="shrink-0 md:block hidden">Overview</Link>
            <Link className="shrink-0 md:block hidden">Channel Integration</Link>
            <Link className="shrink-0 md:block hidden">Shipping Rate calculator</Link>
            <Link className="shrink-0 md:block hidden">Resource</Link>
            <Link className="shrink-0 md:block hidden">Top location</Link>
          </>
        )}
      </div>

      {/* Start Shipping Now Button */}
      <div>
      <Link
        className={` shrink-0 bg-purple-500 text-white px-2 py-2 xs:text-xs sm:text-sm rounded-full`}
      >
        Try for free
      </Link>
      </div>
        </div>
    </div>
  );
};

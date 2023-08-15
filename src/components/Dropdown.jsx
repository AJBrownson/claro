import { useState, useEffect, useRef } from "react";
import RaIcon from "../assets/Icons/Raise Icon.svg";
import NorIcon from "../assets/Icons/Normadic Icon.svg";
import MaIcon from "../assets/Icons/Match Icon.svg";
import AccIcon from "../assets/Icons/Accelerate Icon.svg";
import ArrGreen from "../assets/Icons/arrow-trend-up Green.svg";
import { PiCaretDownBold } from "react-icons/pi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownButton = useRef(null);
  const dropDownMenu = useRef(null);

  useEffect(() => {
    const clickOutside = (e) => {
      if (dropDownMenu.current && !dropDownMenu.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <>
      <div>
        <div className="relative flex flex-col xs:w-[full] py-5 px-5 md:py-2 border border-transparent focus:ring-2 focus:ring-offset-2 active:border-lime-green focus:ring-lime-green duration-100 rounded-xl">
          <div
            ref={dropDownButton}
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center"
          >
            <span className="flex flex-row items-center">
              <img src={AccIcon} alt="" className="pr-4 md:w-10" />
              <h1 className="text-lg md:text-sm font-semibold text-light-black">
                Accelerate
              </h1>
            </span>
            <button ref={dropDownButton} onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <PiCaretDownBold />
              ) : (
                <PiCaretDownBold className="w-0" />
              )}
            </button>
            {isOpen && (
              <div
                ref={dropDownMenu}
                className="absolute top-16 rounded-xl py-5"
              >
                <div className="flex justify-between w-full xs:items-center">
                  <p className="text-light-black xs:w-1/2">
                    Fast-track your startup&apos;s growth
                  </p>
                  <img src={ArrGreen} alt="" className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* second item */}
        <div className="relative flex flex-col xs:w-[full] py-5 md:py-2 px-5 border border-transparent active:border-lime-green focus:ring-lime-green duration-100 rounded-xl">
          <div
            ref={dropDownButton}
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center"
          >
            <span className="flex flex-row items-center">
              <img src={RaIcon} alt="" className="pr-4 md:w-10" />
              <h1 className="text-lg md:text-sm font-semibold text-light-black">
                Raise
              </h1>
            </span>
            <button ref={dropDownButton} onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <PiCaretDownBold />
              ) : (
                <PiCaretDownBold className="w-0" />
              )}
            </button>
            {isOpen && (
              <div
                ref={dropDownMenu}
                className="absolute top-16 rounded-xl py-5"
              >
                <div className="flex justify-between w-full xs:items-center">
                  <p className="text-light-black xs:w-1/2">
                    Fast-track your startup&apos;s growth
                  </p>
                  <img src={ArrGreen} alt="" className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* third item */}
        <div className="relative flex flex-col xs:w-[full] py-5 md:py-2 px-5 border border-transparent active:border-lime-green focus:ring-lime-green duration-100 rounded-xl">
          <div
            ref={dropDownButton}
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center"
          >
            <span className="flex flex-row items-center">
              <img src={NorIcon} alt="" className="pr-4 md:w-10" />
              <h1 className="text-lg md:text-sm font-semibold text-light-black">
                Normadic
              </h1>
            </span>
            <button ref={dropDownButton} onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <PiCaretDownBold />
              ) : (
                <PiCaretDownBold className="w-0" />
              )}
            </button>
            {isOpen && (
              <div
                ref={dropDownMenu}
                className="absolute top-16 rounded-xl py-5"
              >
                <div className="flex justify-between w-full xs:items-center">
                  <p className="text-light-black xs:w-1/2">
                    Fast-track your startup&apos;s growth
                  </p>
                  <img src={ArrGreen} alt="" className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* fourth item */}

        <div className="relative flex flex-col xs:w-[full] py-5 md:py-2 px-5 border border-transparent active:border-lime-green focus:ring-lime-green duration-100 rounded-xl">
          <div
            ref={dropDownButton}
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center"
          >
            <span className="flex flex-row items-center">
              <img src={MaIcon} alt="" className="pr-4 md:w-10" />
              <h1 className="text-lg md:text-sm font-semibold text-light-black">
                Match
              </h1>
            </span>
            <button ref={dropDownButton} onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <PiCaretDownBold />
              ) : (
                <PiCaretDownBold className="w-0" />
              )}
            </button>
            {isOpen && (
              <div
                ref={dropDownMenu}
                className="absolute top-16 rounded-xl py-5"
              >
                <div className="flex justify-between w-full xs:items-center">
                  <p className="text-light-black xs:w-1/2">
                    Fast-track your startup&apos;s growth
                  </p>
                  <img src={ArrGreen} alt="" className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

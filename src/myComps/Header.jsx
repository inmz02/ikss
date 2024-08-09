import {
  PiHeadphonesFill,
  PiHourglassLowBold,
  PiUploadSimple,
} from "react-icons/pi";

import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";

import { useState } from "react";

const Header = ({ onSave }) => {
  const handleMusicClick = () => {
    const url =
      "https://www.youtube.com/watch?v=G3ZzXJ9pI2w&list=PL5Xwnmx6dbYcCoABBbdImKWqt0GcEqw6A&pp=gAQBiAQB8AUB";
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handlePomodoroClick = () => {
    const url = "https://app.flocus.com/";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [openState, setOpenState] = useState(false);

  const toggleMenu = () => {
    setOpenState((prevState) => !prevState);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-my-dark-red font-prata text-4xl mt-3 text-center">
        Isabelle's Korean Study Space
      </h1>

      {openState && (
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="headerInputs flex  gap-5 justify-center items-center">
            <button
              type="button"
              className="border-my-blue text-my-blue hover:bg-my-light-blue"
              onClick={handleMusicClick}
            >
              <PiHeadphonesFill /> Study Music Playlist
            </button>
            <button
              type="button"
              className="border-my-careys-pink text-my-careys-pink hover:bg-my-light-careys-pink"
              onClick={handlePomodoroClick}
            >
              <PiHourglassLowBold /> Pomodoro Timer
            </button>
          </div>

          <button
            type="button"
            className="border-[#b9c6ad] text-[#b9c6ad] hover:bg-[#eef5e8]  myButn w-fit text-center text-base mt-5"
            onClick={onSave}
          >
            <PiUploadSimple /> Save
          </button>
        </div>
      )}

      <div
        className="text-3xl text-my-pink font-bold cursor-pointer mt-5"
        onClick={toggleMenu}
      >
        {openState ? (
          <IoChevronUpCircleOutline />
        ) : (
          <IoChevronDownCircleOutline />
        )}
      </div>
    </div>
  );
};

export default Header;

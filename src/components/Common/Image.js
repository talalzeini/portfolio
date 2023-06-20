import React, { useEffect, useState } from "react";
import SmileImage from "../assets/images/bitmoji/smile.webp";
import WinkImage from "../assets/images/bitmoji/wink.webp";
import "../styles/about.css";

const ImageSwitcher = () => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const winkInterval = setInterval(() => {
      setImagePath(WinkImage);
    }, 3000);

    const smileInterval = setInterval(() => {
      setImagePath(SmileImage);
    }, 1750);

    return () => {
      clearInterval(winkInterval);
      clearInterval(smileInterval);
    };
  }, []);

  return (
    <div>
      {imagePath ? (
        <img class="profile-image" src={imagePath} alt="Bitmoji" />
      ) : (
        <img class="profile-image" src={SmileImage} alt="Default Bitmoji" />
      )}
    </div>
  );
};

export default ImageSwitcher;

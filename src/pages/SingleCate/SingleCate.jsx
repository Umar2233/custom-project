import React, { useContext, useState } from "react";
import "./singleCate.scss";
import { SetTitleCate } from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const SingleCate = () => {
  const [open, setOpen] = useState(false);

  const [sliderNumber, setSliderNumber] = useState();

  const { image } = useContext(SetTitleCate);

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (Move) => {
    let newSliderNumber;

    if (Move === "l") {
      newSliderNumber = sliderNumber === image.len - 1 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === image.len - 1 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };

  return (
    <div className="sContainer">
      {open && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="sliderLeft"
            onClick={() => handleMove("l")}
          />
          <img src={image.img[sliderNumber].src} alt="" className="sliderImg" />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="sliderRight"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <div className="sWrapper">
        <div className="sLeft">
          {image.img.map((photo, i) => (
            <img
              src={photo.src}
              alt=""
              width={350}
              className="sImg"
              onClick={() => handleOpen(i)}
            />
          ))}
        </div>
        <div className="sRight">
          <h1>{image.title}</h1>
          <p>{image.desc}</p>
          <button className="sBtn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCate;

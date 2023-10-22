import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
  faStar,
  faTrophy,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

function ProductView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 5; // Số lượng ảnh - 1

  const images = [
    "https://zshop.vn/blogs/wp-content/uploads/2019/04/4-e1560154793954-768x680.png",
    "https://zshop.vn/blogs/wp-content/uploads/2019/06/olympus-om-d-e-m10-mark-iii-kit-14-42mm-ez-black-zshop_4-e1560155727119-768x578.jpg",
    "https://zshop.vn/blogs/wp-content/uploads/2019/06/71RGuPFOlbL._SL1500_-e1560155519754.jpg",
    "https://cdn.vjshop.vn/may-anh/bai-viet-tin-tuc/best-camera-for-entry-level/best-camera-for-entry-level-1.jpeg",
    "https://binhminhdigital.com/StoreData/images/Category/raw-voi-jpeg-dinh-dang-hinh-anh-nao-tot-hon-3.jpg",
    "https://cdn.tgdd.vn/hoi-dap/1354444/file-cr2-la-gi-cach-mo-va-chuyen-file-cr2-sang-jpg-png%20(5)-800x450.jpg",
  ];

  const moveToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const moveToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(moveToNext, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-container">
      <div className="product-images" style={{ display: "flex" }}>
        <div
          className="arrow-left"
          onClick={moveToPrevious}
          style={{
            flex: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "24px" }} />
        </div>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={true}
          selectedItem={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          style={{ flex: "50%" }}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Product ${index + 1}`}
                style={{ maxWidth: "40%", maxHeight: "40%" }}
              />
            </div>
          ))}
        </Carousel>
        <div
          className="arrow-right"
          onClick={moveToNext}
          style={{
            flex: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "24px" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          margin: "10px",
          borderRadius: "5px",
          borderWidth: "3px",
          border: "2px solid grey",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "red",
            opacity: 0.6,
            margin: "5px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "15px",
                alignItems: "center",
              }}
            >
              699.000đ
            </p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              flex: 1,
            }}
          >
            <p
              style={{
                color: "black",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              1.198.000đ
            </p>
            <p
              style={{
                color: "red",
                fontSize: "11px",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              -50%
            </p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              flex: 1,
            }}
          >
            <p
              style={{
                color: "red",
                fontSize: "10px",
                fontWeight: "bold",
                margin: "5px",
              }}
            >
              Hàng chính hãng
            </p>
          </div>
        </div>
        <div
          style={{
            flex: 10,
            backgroundColor: "white",
            margin: "5px",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            KHAY ĐỰNG THÔNG MINH KÈM DÂY SẠC
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "yellow", margin: "5px" }}
              icon={faStar}
            />
            <p style={{ color: "red", opacity: 0.5 }}>4.9/5 | 13,4k</p>
            <p
              style={{
                color: "grey",
                opacity: 0.7,
                margin: "5px",
              }}
            >
              đã được bán
            </p>

            <FontAwesomeIcon
              style={{
                color: "grey",
                opacity: 0.7,
                marginLeft: "30%",
                marginRight: "5px",
              }}
              icon={faTruck}
            />
            <p style={{ color: "grey", opacity: 0.7 }}>Miễn phí vận chuyển</p>
          </div>
          <hr
            style={{
              color: "grey",
              opacity: 0.5,
              margin: "0 5px",
            }}
          ></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <FontAwesomeIcon
              style={{ color: "red", margin: " 0 5px" }}
              icon={faTrophy}
            />
            <p style={{ color: "red", opacity: 0.6 }}>Sản phẩm hàng đầu !</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                fontSize: "18px",
                color: "red",
                opacity: 0.6,
                marginLeft: "50%",
              }}
            />{" "}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "yellow",
            margin: "5px",
            borderRadius: "5px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProductView;

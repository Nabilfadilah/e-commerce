import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {allProducts} from "../../data";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./SingleProduct.css";

const SingleProduct = () => {
  // parameter id untuk get data berdasarkan id
  const {id} = useParams();

  // mengambil semua data product
  const product = allProducts.find((product) => product.id === parseInt(id));

  // warna product
  const colors = ["red", "purple", "teal", "green", "black"];
  // select color
  const [selectedColor, setSelectedColor] = useState(null);
  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };

  // ukuran produk
  const sizes = ["s", "m", "l", "xl", "xxl"];
  // select size
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="singleProduct-container">
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img src={product.img} alt="" className="singleProduct-image" />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-number">{product.price}</p>
          <h4 className="description-title">Description</h4>
          <p className="singleProduct-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            provident ducimus in aut officiis nisi quam similique reiciendis
            nobis? Nam nisi, accusamus id odit officiis illo iste sapiente omnis
            sunt.
          </p>
          <div className="singleProduct-options">
            <div className="color-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color,
                      outline:
                        selectedColor === color ? `3px solid ${color}` : "",
                    }}
                    onClick={() => handleCircleClick(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="sizes-section">
              <h4>Size</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      border: selectedSize === size ? "1px solid #ccc" : "",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="addToCart">
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;

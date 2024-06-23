import React, { useState } from "react";
import { addProduct } from "../../store/ProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  //   const products = useSelector((state) => state.products);
  const navigte = useNavigate();

  //   const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleUserAdd = (e) => {
    e.preventDefault();
    if (description && newPrice && oldPrice && tag && color) {
      const newUser = {
        //   id: users.length ? users[users.length - 1].id + 1 : 1,
        description,
        file,
        newPrice,
        oldPrice,
        tag,
        color,
      };
      dispatch(addProduct(newUser));
      navigte("/usersList"); // Ensure this route exists and displays UsersList
    } else {
      alert("Please fill in all fields");
    }
  };
  return (
    <>
      <h2>Add New Product</h2>
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="New Price"
          onChange={(e) => setNewPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="Old Price"
          onChange={(e) => setOldPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="tag"
          onChange={(e) => setTag(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="color"
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>
      <button onClick={handleUserAdd}>Add Product</button>
      <div>
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={file} />
      </div>
    </>
  );
}

export default AddProduct;

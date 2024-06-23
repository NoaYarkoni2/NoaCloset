import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/usersList");
  };
  const handleAddProduct = () => {
    navigate("/addProduct");
  };

  return (
    <div>
      <button onClick={handleView}>View UserList</button>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default Admin;

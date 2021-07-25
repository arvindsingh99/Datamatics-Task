
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Article() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [condition, setCondition] = useState(true);
  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  const val = (item) => {
    handleShow(item)
    setModalInfo(item);
    if (item.price > 10) {
      setCondition(true);
    }
    else {
      setCondition(false);
    }
  }
  return (
    <div className="article">

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr onClick={() => val(item)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}

        </tbody>
      </table>
      <Modal show={show} onHide={handleClose} cenetred>

        <Modal.Header style={{ backgroundColor: condition ? "green" : "red" }}>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Id:  {modalInfo.id} <br />
          Name:  {modalInfo.name} <br />
          Brand : {modalInfo.brand} <br />
          Price: {modalInfo.price}
          <p style={{ backgroundColor: "green", color: "white" }}> If Price more than 10</p>
          <p style={{ backgroundColor: "red", color: "white" }}> If Price less than 10</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default Article;
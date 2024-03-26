import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sjh709/react-study-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className='detail-area'>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <img
              className='detail-image'
              src={productDetail?.img}
              alt='product image'
            />
          </Col>
          <Col md={6} sm={12}>
            <div className='product-info'>{productDetail?.title}</div>
            <div className='product-info'>₩ {productDetail?.price}</div>
            <div className='product-choice'>
              {productDetail?.choice === true ? 'Conscious choice' : ''}
            </div>
            <Dropdown className='product-size'>
              <Dropdown.Toggle variant='outline-dark' id='dropdown-basic'>
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className='add-button' variant='dark'>
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/reducers/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();

  const getProductDetail = async () => {
    dispatch(fetchProductDetail(id));
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

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='product-card' onClick={() => showDetail(item.id)}>
      <img className='product-img' src={item?.img} alt='product image' />
      <div className='product-choice'>
        {item?.choice === true ? 'Conscious choice' : ''}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className='new-product'>{item?.new === true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;

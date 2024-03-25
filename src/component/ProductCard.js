import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className='product-card'>
      <img className='product-img' src={item?.img} />
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

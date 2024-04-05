import request from './request';

export const GetMyCart = () => {
  return request(
    {
      url: '/product/sale/xifen/coupon/page',
      method: 'GET'
    },
    true
  );
};

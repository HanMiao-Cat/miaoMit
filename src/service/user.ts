import { routerList } from '@/dicts/index';

const defaultAvatar = new URL(
  '/src/assets/images/defaultAvatar.jpg',
  import.meta.url
).href;

// 登录
export const LoginApi = () => {
  return new Promise((resolve) => {
    const token = '1111';
    resolve(token);
  });
};

// 个人信息
export const GetUserInfoApi = () => {
  return new Promise<API.GetUserInfoType>((resolve) => {
    const userInfo = { userId: `gxx${Date.now()}`, avatar: defaultAvatar, userName: '大大怪' };
    const rulePermission = ['rule_order1', 'rule_order2'];
    resolve({ userInfo, rulePermission, routerList });
  });
};

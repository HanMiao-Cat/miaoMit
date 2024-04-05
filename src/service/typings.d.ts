declare namespace Params {}

declare namespace API {
  type GetUserInfoType = {
    userInfo: {
      userId: string;
      avatar: string;
      userName: string;
    };
    rulePermission: string[];
    routerList: any[];
  };
}

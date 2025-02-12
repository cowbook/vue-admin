import { defHttp } from '/@/utils/http/axios';
import { SmsParams,LoginParams, LoginResultModel, GetUserInfoModel,SmsResultModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/vlogin',
  Logout = '/vlogout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}


/**
 * @description: group register sms api
 */
export function smsApi(params: SmsParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<SmsResultModel>(
    {
      url: '/send_reg_sms',
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}


/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}

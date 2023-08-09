import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
} from "./common";

const GuideResponse = {
  find: {
    200: createSuccessData(
      {
        email: "test@test.com",
      },
      "이메일 찾기에 성공했습니다.",
      "Success Find Email"
    ),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User",
        description: "유저를 찾을 수 없습니다.",
      },
    ]),
  },
  findPassword: {
    200: createSuccessData(
      true,
      "패스워드 찾기에 성공하였습니다.",
      "Success Find Password"
    ),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User",
        description: "유저를 찾을 수 없습니다.",
      },
    ]),
  },
  changePassword: {
    200: createSuccessData(
      true,
      "패스워드 변경에 성공했습니다.",
      "Success Change Password"
    ),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User",
        description: "유저를 찾을 수 없습니다.",
      },
    ]),
  },
  changeOs: {
    200: createSuccessData(
      true,
      "OS 변경에 성공했습니다.",
      "Success Change Os"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Same OS",
        description: "현재 OS와 변경하고자 하는 OS가 같습니다.",
      },
    ]),
  },
  changeLanguage: {
    200: createSuccessData(
      true,
      "OS 변경에 성공했습니다.",
      "Success Change Os"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Same Language",
        description: "현재 Language와 변경하고자 하는 Language가 같습니다.",
      },
    ]),
  },
};

export default GuideResponse;

import UserType from "enum/userType";
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";
import SocialType from "enum/socialType";
import OsType from "enum/osType";

const UserResponse = {
  deleteMe: {
    200: createSuccessMessageData(
      "계정 삭제에 성공했습니다.",
      "Success Delete My Account"
    ),
    401: createAuthErrorData(),
  },
  changeOs: {
    200: createSuccessMessageData(
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
    200: createSuccessMessageData(
      "언어 변경에 성공했습니다.",
      "Success Change Os"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Same Language",
        description: "현재 Language와 변경하고자 하는 Language가 같습니다.",
      },
    ]),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User",
        description: "유저를 찾을 수 없습니다.",
      },
    ]),
  },
  changeStatus: {
    200: createSuccessMessageData(
      "유저 상태 변경에 성공했습니다.",
      "Success Change Status"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found User",
        description: "1개 이상의 유저를 선택해주세요.",
      },
    ]),
  },
  findUserList: {
    200: createSuccessData(
      {
        data: {
          data: [
            {
              regDate: "2023-07-09T02:22:23.622Z",
              id: 2,
              email: "test@test.com",
              status: UserType.ACTIVE,
              socialType: SocialType.FACEBOOK,
              lang: "en",
              os: OsType.AOS,
              model: "CR-1",
              lastAccessTime: "2023-07-09T02:22:23.622Z",
            },
            {
              regDate: "2023-07-09T02:23:07.084Z",
              id: 3,
              email: "test3@test.com",
              status: UserType.ACTIVE,
              socialType: SocialType.FACEBOOK,
              lang: "en",
              os: OsType.AOS,
              model: "CR-1",
              lastAccessTime: "2023-07-09T02:22:23.622Z",
            },
          ],
          count: 2,
        },
        statusCode: 200,
        message: "유저 리스트를 조회합니다.",
      },
      "유저 리스트를 조회합니다.",
      "Success Find user List"
    ),
    401: createAuthErrorData(),
  },
  findUserStats: {
    200: createSuccessData(
      {
        data: {
          data: [
            {
              regDate: "2023-07-09T02:22:23.622Z",
              count: 3,
            },
            {
              regDate: "2023-07-09T02:23:07.084Z",
              count: 5,
            },
          ],
          count: 2,
        },
        statusCode: 200,
        message: "유저 통계를 조회합니다.",
      },
      "유저 통계를 조회합니다.",
      "Success Find User Stats"
    ),
    401: createAuthErrorData(),
  },
  saveAccessTime: {
    200: createSuccessMessageData(
      "접근 시간 생성에 성공 하였습니다.",
      "Success Save Access Time"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User",
        description: "유저를 찾을 수 없습니다.",
      },
    ]),
  },
};

export default UserResponse;

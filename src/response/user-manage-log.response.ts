import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";
import UserManageType from "enum/userManageType";

const UserManageLogResponse = {
  saveUserManageLog: {
    200: createSuccessMessageData(
      "개인 정보 조회 기록을 생성합니다.",
      "Success Save User Manage Log"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Admin",
        description: "관리자를 찾을 수 없습니다.",
      },
    ]),
  },
  findUserManageLogList: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            page: "활성화 관리",
            type: UserManageType.ACTIVE,
            ip: "00.000.00.00",
            admin: "admin",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            page: "사용자 조회",
            type: UserManageType.EXCEL,
            ip: "00.000.00.00",
            admin: "admin",
          },
        ],
        count: 2,
      },
      "개인 정보 조회 리스트를  조회 합니다.",
      "Success Find User Manage List"
    ),
    401: createAuthErrorData(),
  },
};

export default UserManageLogResponse;

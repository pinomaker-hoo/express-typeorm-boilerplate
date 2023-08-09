import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const AdminLogResponse = {
  saveAdminLog: {
    200: createSuccessMessageData(
      "관리자 기록을 생성합니다.",
      "Success Save Admin Log"
    ),
    401: createAuthErrorData(),
  },
  findAdminLogList: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            admin: "admin",
            title: "서비스 약관 수정",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            admin: "admin",
            title: "서비스 약관 수정",
          },
        ],
        count: 2,
      },
      "관리자 운영 활동 리스트를 조회 합니다.",
      "Success Find Admin Log List"
    ),
    401: createAuthErrorData(),
  },
  findAdminLog: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        admin: "admin",
        title: "서비스 약관 수정",
        text: "수정 내용",
      },
      "관리자 운영 활동을 조회 합니다.",
      "Success Find Admin Log"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Admin Log",
        description: "기록을 찾을 수 없습니다.",
      },
    ]),
  },
  updateAdminLog: {
    200: createSuccessMessageData(
      "관리자 기록을 수정합니다.",
      "Success Update Admin Log"
    ),
    401: createAuthErrorData(),
  },
  deleteAdminLog: {
    200: createSuccessMessageData(
      "관리자 기록을 삭제합니다.",
      "Success Delete Admin Log"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Admin Log",
        description: "1개 이상의 기록을 선택해주세요.",
      },
    ]),
  },
};

export default AdminLogResponse;

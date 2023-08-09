import { createAuthErrorData, createSuccessData } from "./common";
import OsType from "enum/osType";

const LoginHistoryResponse = {
  findLoginHistoryList: {
    200: createSuccessData(
      {
        data: [
          {
            regDate: "2023-07-18T00:55:38.673Z",
            id: 14,
            ip: "127.0.0.1",
            os: "AOS",
            user: {
              email: "test@test.com",
            },
          },
          {
            regDate: "2023-07-18T00:55:38.673Z",
            id: 15,
            ip: "127.0.0.1",
            os: "AOS",
            user: {
              email: "test@test.com",
            },
          },
        ],
        count: 2,
      },
      "로그인 기록 리스트를  조회 합니다.",
      "Success Find Login History Log List"
    ),
    401: createAuthErrorData(),
  },
};

export default LoginHistoryResponse;

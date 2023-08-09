// ** Common Imports
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const AdminResponse = {
  deleteAdmin: {
    200: createSuccessMessageData(
      "관리자 리스트를 삭제했습니다.",
      "Success Delete Admin"
    ),
    400: createErrorData(400, [
      {
        errorMessage: "0명을 삭제할 수 없습니다.",
        description: "0명을 삭제할 수 없습니다.",
      },
    ]),
    401: createAuthErrorData(),
  },
  findAdminList: {
    200: createSuccessData(
      {
        data: {
          data: [
            {
              regDate: "2023-07-09T02:22:23.622Z",
              id: 2,
              username: "admin1",
              grade: "MASTER",
            },
            {
              regDate: "2023-07-09T02:23:07.084Z",
              id: 3,
              username: "admin",
              grade: "MASTER",
            },
          ],
          count: 2,
        },
        statusCode: 200,
        message: "관리자 리스트를 조회합니다.",
      },
      "관리자 리스트를 조회합니다.",
      "Success Find Admin List"
    ),
    401: createAuthErrorData(),
  },
};

export default AdminResponse;

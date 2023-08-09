import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const ManualResponse = {
  saveManual: {
    200: createSuccessMessageData(
      "메뉴얼을 생성합니다.",
      "Success Save Manual"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  updateManual: {
    200: createSuccessMessageData(
      "메뉴얼을 수정 합니다.",
      "Success Update Manual"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Manual",
        description: "메뉴얼를 찾을 수 없습니다.",
      },
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteManualList: {
    200: createSuccessMessageData(
      "메뉴얼을 삭제 합니다.",
      "Success Delete Manual"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Manual",
        description: "1개 이상의 메뉴얼을 선택해주세요.",
      },
    ]),
  },
  findManualLsit: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            model: {
              name: "CR-1",
            },
            name: "메뉴얼1",
            filePath: "http://123.%%%.pdf",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            model: {
              name: "CR-1",
            },
            name: "메뉴얼1",
            filePath: "http://123.%%%.pdf",
          },
        ],
        count: 2,
      },
      "메뉴얼 리스트를 조회 합니다.",
      "Success Find Manual List"
    ),
    401: createAuthErrorData(),
  },
  findManual: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        model: {
          name: "CR-1",
        },
        name: "메뉴얼1",
        filePath: "http://123.%%%.pdf",
      },
      "메뉴얼을 조회 합니다.",
      "Success Find Manual"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Manual",
        description: "메뉴얼을 찾을 수 없습니다.",
      },
    ]),
  },
  findManualLatest: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        model: {
          name: "CR-1",
        },
        name: "메뉴얼1",
        filePath: "http://123.%%%.pdf",
      },
      "메뉴얼을 조회 합니다.",
      "Success Find Manual"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Manual",
        description: "메뉴얼을 찾을 수 없습니다.",
      },
    ]),
  },
};

export default ManualResponse;

import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const ModelResponse = {
  saveAdminLog: {
    200: createSuccessMessageData(
      "모델을 생성합니다.",
      "Success Save Admin Log"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Exist Model Name",
        description: "중복된 모델 이름 입니다.",
      },
    ]),
  },
  findModelList: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            name: "CR-1",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            name: "CR-2",
          },
        ],
        count: 2,
      },
      "모델 리스트를 조회 합니다.",
      "Success Find Model List"
    ),
    401: createAuthErrorData(),
  },
  findModel: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        name: "CR-1",
      },
      "모델을 조회 합니다.",
      "Success Find Model"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  updateModel: {
    200: createSuccessMessageData(
      "모델을 수정합니다..",
      "Success Update Admin Log"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteModel: {
    200: createSuccessMessageData("모델을 삭제합니다.", "Success Delete Model"),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Model",
        description: "1개 이상의 모델을 선택해주세요.",
      },
    ]),
  },
};

export default ModelResponse;

import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const UserModelResponse = {
  saveUserModel: {
    200: createSuccessMessageData(
      "모델 등록에 성공하였습니다.",
      "Success Save User-Model"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Exist User Model",
        description: "유저의 모델이 존재합니다.",
      },
    ]),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  findMyModel: {
    200: createSuccessData(
      {
        id: 13,
        serial: "12-153-123",
        name: "CR-1",
        mac: "aoisdhaosd123",
        purchaseDate: "2023-03-06",
        model: {
          id: 1,
          name: "CR-1",
        },
      },
      "모델 조회에 성공하였습니다.",
      "Success Find User-Model"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  changeModelName: {
    200: createSuccessMessageData(
      "본인 모델의 이름 변경에 성공하였습니다.",
      "Success Change User-Model name"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found User Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
};

export default UserModelResponse;

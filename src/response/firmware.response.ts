import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const FirmwareResponse = {
  findFirmwareVersion: {
    200: createSuccessData(
      {
        id: 1,
        version: "1.1V",
        name: "펌웨어 이름",
      },
      "최신 Fireware 버전을 조회합니다.",
      "Success Find Recent Firmware Version"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Firmware",
        description: "펌웨어를 찾을 수 없습니다.",
      },
    ]),
  },
  saveFirmware: {
    200: createSuccessMessageData(
      "Fireware를 생성합니다.",
      "Success Save Firmware"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  updateFireware: {
    200: createSuccessMessageData(
      "Fireware를 수정 합니다.",
      "Success Update Firmware"
    ),
    401: createAuthErrorData(),
    400: createErrorData(404, [
      {
        errorMessage: "Exist Version",
        description: "같은 버전이 이미 존재합니다.",
      },
    ]),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteFirewareList: {
    200: createSuccessMessageData(
      "Fireware를 삭제 합니다.",
      "Success Delete Firmware"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Firmware",
        description: "1개 이상의 펌웨어를 선택해주세요.",
      },
    ]),
  },
  findFirewareLsit: {
    200: createSuccessData(
      {
        data: [
          {
            regDate: "2023-07-18T04:28:57.363Z",
            id: 1,
            filePath: "http://123123.com",
            version: "1.1",
            name: "펌웨어 버전@@1",
            model: {
              id: 1,
              name: "CR-3",
            },
          },
          {
            regDate: "2023-07-18T04:50:24.389Z",
            id: 2,
            filePath: "http://123123.com",
            version: "1.1",
            name: "펌웨어 버전1",
            model: {
              id: 1,
              name: "CR-3",
            },
          },
        ],
        count: 2,
      },
      "Fireware 리스트를 조회 합니다.",
      "Success Find Firmware List"
    ),
    401: createAuthErrorData(),
  },
  findFirmware: {
    200: createSuccessData(
      {
        regDate: "2023-07-18T04:28:57.363Z",
        id: 1,
        filePath: "http://123123.com",
        version: "1.1",
        name: "펌웨어 버전@@1",
        model: {
          id: 1,
          name: "CR-3",
        },
      },
      "Fireware를 조회 합니다.",
      "Success Find Firmware"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Firmware",
        description: "Firmware를 찾을 수 없습니다.",
      },
    ]),
  },
};

export default FirmwareResponse;

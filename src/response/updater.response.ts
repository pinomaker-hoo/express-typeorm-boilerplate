import OsType from "enum/osType";
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const UpdaterResponse = {
  saveUpdater: {
    200: createSuccessMessageData(
      "업데이터를 생성합니다.",
      "Success Save Updater"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Exist Update OS",
        description: "해당 OS의 업데이터가 이미 존재합니다.",
      },
    ]),
  },
  updateUpdater: {
    200: createSuccessMessageData(
      "업데이터를 수정 합니다.",
      "Success Update Updater"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Updater",
        description: "업데이터를 찾을 수 없습니다.",
      },
    ]),
  },
  deleteUpdaterList: {
    200: createSuccessMessageData(
      "업데이터를 삭제 합니다.",
      "Success Delete Updater"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Firmware",
        description: "1개 이상의 펌웨어를 선택해주세요.",
      },
    ]),
  },
  findUpdaterLsit: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            os: OsType.WINDOW,
            fileName: "펌웨어1",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            os: OsType.MAC,
            fileName: "펌웨어1",
          },
        ],
        count: 2,
      },
      "업데이터 리스트를 조회합니다.",
      "Success Find Updater List"
    ),
    401: createAuthErrorData(),
  },
  findUpdater: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        os: OsType.MAC,
        fileName: "펌웨어1",
      },
      "업데이터를 조회 합니다.",
      "Success Find Updater"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Updater",
        description: "업데이터를 찾을 수 없습니다.",
      },
    ]),
  },
};

export default UpdaterResponse;

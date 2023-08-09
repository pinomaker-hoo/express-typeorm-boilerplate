import OsType from "enum/osType";
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const AppVersionResponse = {
  saveAppVersion: {
    200: createSuccessMessageData(
      "앱 버전을 생성합니다.",
      "Success Save Manual"
    ),
    401: createAuthErrorData(),
  },
  updateAppVersion: {
    200: createSuccessMessageData(
      "앱 버전을 수정 합니다.",
      "Success Update AppVersion"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found AppVersion",
        description: "앱 버전을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteAppVersionList: {
    200: createSuccessMessageData(
      "앱 버전을 삭제 합니다.",
      "Success Delete AppVersion"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found AppVersion",
        description: "1개 이상의 앱 버전을 선택해주세요.",
      },
    ]),
  },
  findAppVersionLsit: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            os: OsType.AOS,
            text: "버그 수정 및 속도 개선",
            version: 1.1,
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            os: OsType.AOS,
            text: "버그 수정 및 속도 개선",
            version: 1.12,
          },
        ],
        count: 2,
      },
      "앱 버전 리스트를 조회 합니다.",
      "Success Find AppVersion List"
    ),
    401: createAuthErrorData(),
  },
  findAppVersion: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        os: OsType.AOS,
        text: "버그 수정 및 속도 개선",
        version: 1.12,
      },
      "앱 버전을 조회 합니다.",
      "Success Find AppVersion"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found AppVersion",
        description: "앱 버전을 찾을 수 없습니다.",
      },
    ]),
  },
};

export default AppVersionResponse;

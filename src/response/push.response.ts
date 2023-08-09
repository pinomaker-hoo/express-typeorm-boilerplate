import PushType from "enum/pushType";
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const PushResponse = {
  pushPhone: {
    200: createSuccessData(
      {
        phone: "+8201063057848",
        id: 1,
      },
      "인증번호를 SMS로 전송합니다.",
      "Success Send SMS"
    ),
  },
  checkPhone: {
    200: createSuccessMessageData("Same Code", "Success Send SMS"),
    400: createErrorData(400, [
      {
        errorMessage: "Not Same Code",
        description: "코드가 틀립니다.",
      },
    ]),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Verification Code",
        description: "인증 정보를 찾을 수 없습니다.",
      },
    ]),
  },
  pushEmail: {
    200: createSuccessMessageData("메일을 발송 합니다.", "Success Send Email"),
    401: createAuthErrorData(),
  },
  pushApp: {
    200: createSuccessMessageData("푸시를 발송합니다.", "Success Send Push"),
    401: createAuthErrorData(),
  },
  findPushList: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            pushType: PushType.EMAIL,
            title: "푸시 발송 테스트",
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            pushType: PushType.PUSH,
            title: "푸시 발송 테스트2",
          },
        ],
        count: 2,
      },
      "푸시 발송 기록 리스트를 조회 합니다.",
      "Success Find Push Log List"
    ),
    401: createAuthErrorData(),
  },
  findPush: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        pushType: PushType.EMAIL,
        title: "푸시 발송 테스트",
      },
      "푸시 발송 기록을 조회 합니다.",
      "Success Find Push Log"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Push Log",
        description: "푸시 기록을 찾을 수 없습니다.",
      },
    ]),
  },
};

export default PushResponse;

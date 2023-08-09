import UseYn from "enum/useYn";
import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const FaqResponse = {
  saveFaq: {
    200: createSuccessMessageData("FAQ를 생성합니다.", "Success Save Faq"),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  updateFaq: {
    200: createSuccessMessageData("FAQ를 수정 합니다.", "Success Update Faq"),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Faq",
        description: "FAQ를 찾을 수 없습니다.",
      },
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteFaq: {
    200: createSuccessMessageData("FAQ를 삭제 합니다.", "Success Delete Faq"),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Faq",
        description: "1개 이상의 FAQ를 선택해주세요.",
      },
    ]),
  },
  findFaqList: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            title: "How do i Connect intercom",
            text: "How do i Connect intercom",
            exposeYn: UseYn.Y,
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            title: "How do i Connect intercom",
            text: "How do i Connect intercom",
            exposeYn: UseYn.Y,
          },
        ],
        count: 2,
      },
      "FAQ 리스트를 조회 합니다.",
      "Success Find Faq List"
    ),
    401: createAuthErrorData(),
  },
  findFaqListWithoutPagination: {
    200: createSuccessData(
      {
        data: [
          {
            id: 1,
            regDate: "2023-07-09T02:22:23.622Z",
            title: "How do i Connect intercom",
            text: "How do i Connect intercom",
            exposeYn: UseYn.Y,
          },
          {
            id: 2,
            regDate: "2023-07-09T02:22:23.622Z",
            title: "How do i Connect intercom",
            text: "How do i Connect intercom",
            exposeYn: UseYn.Y,
          },
        ],
        count: 2,
      },
      "모델의 FAQ 리스트를 조회 합니다.",
      "Success Find Faq List"
    ),
    401: createAuthErrorData(),
  },
  findFaq: {
    200: createSuccessData(
      {
        id: 1,
        regDate: "2023-07-09T02:22:23.622Z",
        title: "How do i Connect intercom",
        text: "How do i Connect intercom",
        exposeYn: UseYn.Y,
      },
      "Faq를 조회 합니다.",
      "Success Find Faq"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Manual",
        description: "Faq를 찾을 수 없습니다.",
      },
    ]),
  },
};

export default FaqResponse;

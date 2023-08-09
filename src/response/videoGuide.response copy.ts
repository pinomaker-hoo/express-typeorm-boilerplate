import {
  createAuthErrorData,
  createErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const VideoGuideResponse = {
  saveVideoGuide: {
    200: createSuccessMessageData(
      "비디오 가이드를 생성합니다.",
      "Success Save Video Guide"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Exist Video Guide",
        description: "해당 모델의 비디오 가이드가 존재합니다.",
      },
    ]),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  updateVideoGuide: {
    200: createSuccessMessageData(
      "비디오 가이드를 수정 합니다.",
      "Success Update Video Guide"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Video Guide",
        description: "비디오 가이드를 찾을 수 없습니다.",
      },
      {
        errorMessage: "Not Found Model",
        description: "모델을 찾을 수 없습니다.",
      },
    ]),
  },
  deleteVideoGuideList: {
    200: createSuccessMessageData(
      "비디오 가이드를 삭제 합니다.",
      "Success Delete Video Guide"
    ),
    401: createAuthErrorData(),
    400: createErrorData(400, [
      {
        errorMessage: "Not Found Video Guide",
        description: "1개 이상의 비디오 가이드를 선택해주세요.",
      },
    ]),
  },
  findVideGuideList: {
    200: createSuccessData(
      {
        data: [
          {
            regDate: "2023-07-18T06:29:58.463Z",
            id: 2,
            link: "URL.com",
            model: {
              name: "CR-1",
            },
          },
          {
            regDate: "2023-07-18T06:29:58.463Z",
            id: 3,
            link: "URL.com",
            model: {
              name: "CR-1",
            },
          },
        ],
        count: 2,
      },
      "비디오 가이드를 조회 합니다.",
      "Success Find Video Guide List"
    ),
    401: createAuthErrorData(),
  },
  findVideoGuide: {
    200: createSuccessData(
      {
        regDate: "2023-07-18T06:29:58.463Z",
        id: 3,
        link: "URL.com",
        model: {
          name: "CR-1",
        },
      },
      "메뉴얼을 조회 합니다.",
      "Success Find Manual"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Video Guide",
        description: "비디오 가이드를 찾을 수 없습니다.",
      },
    ]),
  },
  findVideoGuideLatest: {
    200: createSuccessData(
      {
        regDate: "2023-07-18T06:29:58.463Z",
        id: 3,
        link: "URL.com",
        model: {
          name: "CR-1",
        },
      },
      "모델의 최신 비디오 가이드을 조회 합니다.",
      "Success Find Video Guide"
    ),
    401: createAuthErrorData(),
    404: createErrorData(404, [
      {
        errorMessage: "Not Found Video Guide",
        description: "비디오 가이드를 찾을 수 없습니다.",
      },
    ]),
  },
};

export default VideoGuideResponse;

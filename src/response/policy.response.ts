import PolicyType from "enum/policyType";
import {
  createAuthErrorData,
  createSuccessData,
  createSuccessMessageData,
} from "./common";

const PolicyResponse = {
  findPolicy: {
    200: createSuccessData(
      {
        id: 1,
        title: "서비스 약관",
        text: "본 사이트는 고객님의 개인정보를 중요시하며 정보통신망 이용 촉진 및 관한 법률을 준수하고 있습니다.",
        type: PolicyType.SERVICE,
      },
      "정책을 조회합니다.",
      "Success Find Policy"
    ),
    401: createAuthErrorData(),
  },
  findPolicyList: {
    200: createSuccessData(
      [
        {
          id: 1,
          title: "서비스 약관",
          text: "본 사이트는 고객님의 개인정보를 중요시하며 정보통신망 이용 촉진 및 관한 법률을 준수하고 있습니다.",
          type: PolicyType.SERVICE,
        },
        {
          id: 2,
          title: "개인정보 처리 방침",
          text: "본 사이트는 고객님의 개인정보를 중요시하며 정보통신망 이용 촉진 및 관한 법률을 준수하고 있습니다.",
          type: PolicyType.PERSONAL_INFO,
        },
        {
          id: 3,
          title: "마케팅 및 광고 동의 설정",
          text: "본 사이트는 고객님의 개인정보를 중요시하며 정보통신망 이용 촉진 및 관한 법률을 준수하고 있습니다.",
          type: PolicyType.MARKETING,
        },
      ],
      "정책 리스트를 조회합니다.",
      "Success Find Policy List"
    ),
    401: createAuthErrorData(),
  },

  updateFireware: {
    200: createSuccessMessageData(
      "정책을 수정 합니다.",
      "Success Update Policy"
    ),
    401: createAuthErrorData(),
  },
};

export default PolicyResponse;

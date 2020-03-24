module.exports = {
  title: "툴킷",
  description: "더나은 민주주의를 위한 툴킷",
  themeConfig: {
    logo: "/assets/img/parti_ci.png",
    nav: [
      { text: "기여하기", link: "/contributing" },
      { text: "Github", link: "https://github.com/parti-coop/toolkit" }
    ],
    sidebar: [
      ["/", "툴킷 소개"],
      {
        title: "커뮤니티 가이드",
        collapsable: false,
        children: [
          ["/community/community101", "소셜이슈 커뮤니티 101"],
          ["/community/decision-making", "협력적 의사결정 툴킷"],
          ["/community/org101", "항해하는 조직 101"],
          ["/community/diy-party101", "DIY 정당 101"]
        ]
      },
      {
        title: "캠페인 가이드",
        collapsable: false,
        children: [
          ["/campaign/campaign101", "캠페인 101"],
          ["/campaign/campaigner", "캠페이너 인생게임"]
        ]
      },
      {
        title: "시민참여플랫폼 운영가이드",
        collapsable: false,

        children: [
          {
            title: "데모스X 운영가이드",
            path: "/demosx/",
            collapsable: true,
            children: [
              ["/demosx/", "0. 운영가이드 1.1"],
              ["/demosx/intro", "1. 들어가며"],
              ["/demosx/planning", "2. 운영 계획 세우기"],
              ["/demosx/civic_proposal", "3. 시민제안 단계"],
              ["/demosx/debate", "4. 시민토론 단계"],
              ["/demosx/execution", "5. 실행"],
              ["/demosx/org_proposal", "6. 기관 제안"],
              ["/demosx/marketing", "7. 홍보 운영"],
              ["/demosx/roadmap", "8. 데모스X 의 로드맵"]
            ]
          }
        ]
      },
      {
        title: "공론장 가이드",
        collapsable: false,
        children: [
          ["/sphere/workshop", "시민제안 워크숍"],
          ["/sphere/agenda", "의제 선정 및 기획"],
          ["/sphere/debate", "시민참여 공론장"],
          ["/sphere/citizenlab", "실험장"],
          ["/sphere/suggestion", "찾아가는 시민제안"]
        ]
      },
      {
        title: "플랫폼 가이드",
        collapsable: false,
        children: [
          ["/soft/groups", "빠띠 그룹스"],
          ["/soft/townhall", "빠띠 타운홀"]
        ]
      },
      ["/tips", "기타 유용한 팁"],
      ["/lab", "빠띠의 실험들"],
      ["mailto:help@parti.xyz", "문의하기"]
    ]
  }
};

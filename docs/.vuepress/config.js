module.exports = {
  title: "툴킷",
  description: "더나은 민주주의를 위한 툴킷",
  themeConfig: {
    logo: "/assets/img/parti_ci.png",
    nav: [
      { text: "기여하기", link: "/contributing" },
      { text: "Github", link: "https://github.com/parti-coop/toolkit" },
    ],
    sidebar: [
      ["/", "툴킷 소개"],
      {
        title: "협력적 커뮤니티 툴킷",
        path: "/community/",
        collapsable: false,
        children: [
          ["/community/community101", "커뮤니티 101"],
          ["/community/organizer", "커뮤니티 오거나이저 되기"],
          ["/community/guide101", "커뮤니티 가이드 만들기"],
          ["/community/coc", "커뮤니티 행동강령 세우기"],
          ["/community/cowork-start", "커뮤니티 활동 시작하기"],
          ["/community/meeting", "커뮤니티 모임 가이드"],
          ["/community/co-work", "커뮤니티에서 협업하기"],
          ["/community/decision-making", "협력적 의사결정"],
          ["/community/org101", "항해하는 조직 101"],
          ["/community/diy-party101", "DIY 정당 101"],
        ],
      },
      {
        title: "프로젝트 팀으로 커뮤니티 만들기",
        collapsable: false,
        children: [
          ["/team-community/intro.md", "들어가며"],
          ["/team-community/ready.md", "커뮤니티 준비하기"],
          ["/team-community/communication.md", "커뮤니티 소통하기"],
          ["/team-community/project.md", "프로젝트 공동작업하기"],
          ["/team-community/program.md", "프로그램 함께 만들기"],
        ],
      },
      {
        title: "캠페인 가이드",
        collapsable: false,
        children: [
          ["/campaign/campaign101", "캠페인 101"],
          ["/campaign/campaigner", "캠페이너 인생게임"],
        ],
      },
      {
        title: "시민협력플랫폼 운영가이드",
        collapsable: false,
        initialOpenGroupIndex: 0,
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
              ["/demosx/roadmap", "8. 데모스X 의 로드맵"],
            ],
          },
          ["/demosx/libgovernance", "작은도서관 거버넌스 운영가이드"],
        ],
      },
      {
        title: "공론장 가이드",
        collapsable: false,
        children: [
          ["/sphere/workshop", "시민제안 워크숍"],
          ["/sphere/agenda", "의제 선정 및 기획"],
          ["/sphere/debate", "시민참여 공론장"],
          ["/sphere/citizenlab", "실험장"],
          ["/sphere/suggestion", "찾아가는 시민제안"],
        ],
      },
      {
        title: "플랫폼 가이드",
        collapsable: false,
        children: [
          ["/soft/groups", "빠띠 그룹스"],
          ["/soft/townhall", "빠띠 타운홀"],
          ["/soft/mix", "빠띠 믹스"],
        ],
      },
      ["/tips", "기타 유용한 팁"],
      ["/lab", "빠띠의 실험들"],
      ["mailto:help@parti.xyz", "문의하기"],
    ],
    plugins: [
      [
        "@vuepress/google-analytics",
        {
          ga: "G-45P0CRGHTK",
        },
      ],
    ],
  },
};

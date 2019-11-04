module.exports = {
  title: "툴킷",
  description: "더나은 민주주의를 위한 툴킷",
  themeConfig: {
    logo: "/assets/img/parti_ci.png",
    nav: [
      { text: "기여하기", link: "/contributing.html" },
      { text: "Github", link: "https://github.com/parti-coop/toolkit" }
    ],
    sidebar: [
      ["/", "툴킷 소개"],
      {
        title: "커뮤니티 가이드",
        collapsable: false,
        children: [
          ["/community/community101.html", "커뮤니티 101"],
          ["/community/org101.html", "항해하는 조직 101"],
          ["/community/diy-party101.html", "DIY 정당 101"]
        ]
      },
      {
        title: "캠페인 가이드",
        collapsable: false,
        children: [
          ["/campaign/campaign101.html", "캠페인 101"],
          ["/campaign/campaigner.html", "캠페이너 인생게임"]
        ]
      },
      {
        title: "시민 참여 플랫폼 데모스X 운영가이드 1.1",
        collapsable: true,
        children: [
          ["/demosx/", "0. 후원제작"],
          ["/demosx/intro.html", "1. 들어가며"],
          ["/demosx/planning.html", "2. 운영 계획 세우기"],
          ["/demosx/civic_proposal.html", "3. 시민제안 단계"],
          ["/demosx/debate.html", "4. 시민토론 단계"],
          ["/demosx/execution.html", "5. 실행"],
          ["/demosx/org_proposal.html", "6. 기관 제안"],
          ["/demosx/marketing.html", "7. 홍보 운영"],
          ["/demosx/roadmap.html", "8. 데모스X 의 로드맵"]
        ]
      },

      {
        title: "플랫폼 가이드",
        collapsable: false,
        children: [
          ["/soft/groups.html", "빠띠 그룹스"],
          ["/soft/townhall.html", "빠띠 타운홀"],
          ["http://demosx.org/", "빠띠 데모스X"]
        ]
      },
      ["/tips.html", "기타 유용한 팁"],
      ["/lab.html", "빠띠의 실험들"],
      ["mailto:help@parti.xyz", "문의하기"]
    ]
  }
};

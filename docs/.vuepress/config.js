module.exports = {
  title: '툴킷',
  description: '더나은 민주주의를 위한 툴킷',
  themeConfig: {
    logo: '/assets/img/parti_ci.png',
    nav: [
      { text: '기여하기', link: '/contributing.html' },
      { text: 'Github', link: 'https://github.com/parti-coop/toolkit' },
    ],
    sidebar: [
      {
        title: '커뮤니티 가이드',
        collapsable: false,
        children: [
          ['/community/community101.html', '커뮤니티 101'],
          ['/community/org101.html', '항해하는 조직 101'],
          ['/community/diy-party101.html', 'DIY 정당 101'],
        ]
      },
      {
        title: '캠페인 가이드',
        collapsable: false,
        children: [
          ['/campaign/campaign101.html', '캠페인 101'],
          ['/campaign/campaigner.html', '캠페이너 인생게임'],
        ]
      },
      ['http://demosx.org/', '시민 참여 플랫폼 가이드'],
      ['/soft/groups.html', '빠띠 그룹스 가이드'],
      ['/soft/townhall.html', '빠띠 타운홀 가이드'],
      ['/tips.html', '기타 유용한 팁'],
      ['/lab.html', '빠띠의 실험들'],
      ['mailto:help@parti.xyz', '문의하기'], 
    ]
  }
}
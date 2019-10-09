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
        title: '커뮤니티',
        collapsable: false,
        children: [
          ['/community/community101.html', '커뮤니티 101'],
          ['/community/org101.html', '항해하는 조직 101'],
          ['/community/diy-party101.html', 'DIY 정당 101'],
        ]
      },
      {
        title: '캠페인',
        collapsable: false,
        children: [
          ['/campaign/campaigner.html', '캠페이너 인생게임'],
        ]
      },
      ['https://townhall.kr/toolkits', '빠띠 타운홀 툴킷'],
      ['http://demosx.org/', '데모스X 운영가이드'],
      ['mailto:help@parti.xyz', '문의하기'], 
    ]
  }
}
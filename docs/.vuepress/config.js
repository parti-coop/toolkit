module.exports = {
  title: '툴킷',
  description: '더나은 민주주의를 위한 툴킷',
  themeConfig: {
    logo: '/assets/img/parti_ci.png',
    nav: [
      { text: 'Github', link: 'https://github.com/parti-coop/toolkit' },
    ],
    sidebar: [
      {
        title: '커뮤니티',
        collapsable: false,
        children: [
          ['/community/community101.html', '커뮤니티 101'],
        ]
      },
      {
        title: '캠페인',
        collapsable: false,
        children: [
          ['/campaign/campaigner.html', '캠페이너 인생게임'],
        ]
      }
    ]
  }
}
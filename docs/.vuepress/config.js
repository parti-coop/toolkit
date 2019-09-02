module.exports = {
  title: '툴킷',
  description: '더나은 민주주의를 위한 툴킷',
  themeConfig: {
    logo: '/assets/img/parti_ci.png',
    sidebar: [
      {
        title: '목차',
        collapsable: true,
        children: [
          ['/', '소개'],
          ['/campaigner.html', '캠페이너 인생 게임'],
          ['/community101.html', '커뮤니티101(작업 중)'],
        ]
      }
    ]
  }
}
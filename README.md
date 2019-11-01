![logo](docs/.vuepress/public/assets/img/parti_ci.png)

# 빠띠 툴킷

https://toolkit.parti.coop/

빠띠 툴킷에 오신 것을 환영합니다. 더 민주적인 세상을 만들기 위해 필요한 가이드를 시민과 함께 만들어 갑니다.

## 개발

Vuepress를 이용하여 만들었습니다.
커맨드 창에 아래의 명령어를 넣어 Vuepress를 설치하세요.
```
npm install
```
아래의 명령어로 개발을 시작합니다.
```
npm run docs:dev
```


### 왼쪽 네비게이션 목록 수정

`docs/.vuepress/config.js`에서 수정 가능합니다.

### 마크다운

각 폴더의 (예: `docs/community/org101.md`) 파일을 수정하면 자동 반영됩니다.

## 빌드

```
npm run docs:build
```
`docs/.vuepress/dist`에 정적 파일이 생깁니다.

## 배포

깃 브랜치를 만들어 github repo에 올려 pull request를 해주세요.
```
git checkout -b {브랜치명}
git push --set-upstream origin {브랜치명}
```
관리자가 요청을 받으면 배포됩니다.
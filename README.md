# portpolio-page

작업물 아카이브와 쇼케이스를 위한 GitHub Pages 포트폴리오입니다.

현재는 디자인과 프로젝트 상세 정보가 확정되기 전의 최소 구조만 포함합니다.

## 구성

- `index.html`: 사이트 진입점 및 프로젝트 카드 기본 구조
- `styles.css`: 최소 레이아웃과 반응형 스타일
- `.nojekyll`: GitHub Pages에서 정적 파일을 그대로 제공하기 위한 설정

## 프로젝트 추가 방법

`index.html`의 `<main class="project-grid">` 안에 있는 `article.project-card`를 복사한 뒤 아래 내용을 채웁니다.

- 프로젝트명
- 한 줄 소개
- 역할과 주요 결과
- 사용 기술
- GitHub, 배포 페이지, 스토어 등 확인 가능한 링크

## 로컬 확인

`index.html`을 브라우저에서 열면 확인할 수 있습니다.

## GitHub Pages

저장소의 **Settings → Pages**에서 배포 소스를 `Deploy from a branch`로 선택한 뒤 `main` 브랜치의 `/ (root)`를 지정하면 됩니다.

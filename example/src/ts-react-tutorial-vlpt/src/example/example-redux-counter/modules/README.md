## Why Redux?

- 컴포넌트의 상태 관리 로직을 다른 파일로 분리시켜 손쉽게 관리할 수 있게 함.
- Context와 유사.(그럼 왜 쓰는거지? => Context API, Hook과 같은 상태 관리 기능이 나오기 훨씬 전에 개발된 라이브러리 이기 때문에 고착화 된 것으로 보임.)

## @types?

- 라이브러리가 자체적으로 Typescript를 지원하지 않는 경우, @types를 앞에 붙여 설치한다. (ex. install redux -> install @types/redux)
- index.d.ts: JS로 쓰인 라이브러리의 변수들의 타입을 적어놓은 파일.
- 지원하는 지 확인하는 방법? 1. 공식 사이트 확인 2. github repo에 index.d.ts파일이 있는 지 확인.
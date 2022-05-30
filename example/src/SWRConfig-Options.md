<!-- SWRConfig API Document: https://swr.vercel.app/ko/docs/options  -->

## SWRConfig Options

errorRetryInterval: number; // 에러가 발생했을 경우 재시도하는 Interval 설정
errorRetryCount?: number;   // 최대 에러 재시도 수 설정
loadingTimeout: number;     // onLoadingSlow 이벤트를 트리거하기 위한 타임아웃 설정.
onLoadingSlow: (key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;   // 요청을 로드하는데 너무 오래 걸리는 경우의 Callback함수(loadingTimeout option으로 트리거)
focusThrottleInterval: number;  // 갱신을 한번만 할 수 있는 최소 시간 설정.
dedupingInterval: number;   // 일정 시간 안에 같은 키 값으로 들어오는 중복 요청을 제거할 Interval 설정
refreshInterval?: number | ((latestData: Data | undefined) => number);  // undefined or 0: Inactive, else interval 
refreshWhenHidden?: boolean; // 브라우저가 유저 화면에서 보이지 않을 때 *폴링(polling)
refreshWhenOffline?: boolean; // Navigator.online() 에서 false를 던졌을 때 폴링.
revalidateOnReconnect: boolean; // Navigator.online에서 브라우저가 네트워크 연결이 되었다는 신호를 던질 때 자동 갱신.
revalidateOnFocus: boolean;     // 브라우저가 포커싱되었을 때 자동 갱신.
revalidateOnMount?: boolean;    // 브라우저에서 컴포넌트가 마운트 되었을 때 자동 갱신.
revalidateIfStale: boolean;     // stale(캐시)에 값이 불릴 때 자동 갱신.
shouldRetryOnError: boolean | ((err: Error) => boolean);    // fetcher에 error가 있을 때 재시도.
suspense?: boolean;         // 아직 unstable / suspense 기능 지원. suspense를 활성화하면 렌더링 시에 data가 항상 준비됨.(Optional 개념 같은데 자세히는 모르겠음.)
fallbackData?: Data;        // hook 사용 시 반환될 초기 데이터.
fetcher?: Fn;               // 데이터를 가져오기 위한 함수.
use?: Middleware[];         // *미들웨어함수 배열
fallback: {                 // *다중 fallback data의 key-value pair object.
    [key: string]: any;
};
isOnline: () => boolean;
isVisible: () => boolean;
isPaused: () => boolean;    // 갱신의 중지 여부를 감지하는 함수.
onSuccess: (data: Data, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;   // 요청이 성공적으로 반환되었을 때 실행할 콜백 함수.
onError: (err: Error, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;     // 요청에서 에러를 반환했을 때 실행할 콜백함수.
onErrorRetry: (err: Error, key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>, revalidate: Revalidator, revalidateOpts: Required<RevalidatorOptions>) => void; // 에러 재시도 핸들러
onDiscarded: (key: string) => void;
compare: (a: Data | undefined, b: Data | undefined) => boolean; // 비논리적 리렌더러를 피하기 위해 반환 데이터가 변경되었는지 확인할 때 사용하는 비교 함수. 기본적으로 stable-hash 사용.

## Terms
1. Polling
    - 하나의 장치(또는 프로그램)이 충돌 회피, 또는 동기화 처리 등을 목적으로 다른 장치(또는 프로그램)의 상태를 주기적으로 검사하여 일정한 조건을 만족할 때 송수신 등의 자료처리를 하는 방식.
    - SWR의 경우, Web application(React) <-> Browser <-> WAS(Spring) 프로세스에서 React가 browser를 통해 WAS와의 동기화를 주기적으로 검사하고 송수신하는 방식을 말한다. 

2. Middleware
    - useSWR Hook 실행 전후에 자동으로 실행될 함수들
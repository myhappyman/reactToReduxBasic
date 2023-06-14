# React Redux Study

김민준님의 저자 `리액트를 다루는 기술`을 읽고 학습한 내용을 타입스크립트로 작성하면서 학습을 하는 repository입니다.

# 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

## Redux

recoil과 마찬가지로 전역 상태 관리 라이브러리이다.
가장 흔하게 사용되는 라이브러리 중 하나로 상태 관리만 따로 분리시켜서 효율적으로 관리 할 수 있다.

### Action

상태에 어떤 변화가 필요하면 액션이라는 것이 발생한다.
객체의 형태로 표현되어 key, value형태로 이루어져 있다.
type이라는 key값의 필드를 반드시 가지고 있어야 한다.

```js
{
  type: 'Increase';
}
```

어떤 변화가 이루어질때마다 액션 객체를 만들어서 사용해야하는데, 매번 작성하는게 번거롭거나 실수로 놓칠 수도 있기에 함수로 관리하는 편이다.

### Reducer

변화를 일으키는 함수다.
액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다.
두 값을 비교하고 새로운 상태를 반환한다.

```js
const initialState = {
  counter: 1,
};
function reducer(state = initialState, action) {
  switch (action) {
  }
}
```

### Store

프로젝트에 리덕스를 적용하기 위해 store를 만든다.
한개의 프로젝트에 단 하나의 스토어만 가질 수 있다.
스토어에는 현재 어플의 상태와 리듀서가 들어가 있고 그 외에 중요한 내장 함수들로 구성되어 있다.

### Dispatch

스토어의 내장 함수 중 하나다.
액션을 발생 시키는 트리거 역할을 한다.
`dispatch(action)` 형태로 객체를 파라미터로 넣어서 호출한다.
이 함수가 동작하고 나면 리듀서 함수를 실행시키고 새로운 상태값을 만든다.

### subscribe

스토어의 내장 함수 중 하나다.
subscribe는 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출된다.

```js
const listener = () => {
  console.log('상태가 업데이트 됨.');
};
const unsubscribe = store.subscribe(listener);
unsubscribe();
```

## 리덕스 코드 구성하기

리덕스 작성을 위해서는 액션 타입, 액션 생성 함수, 리듀서 코드가 필요하다. 이 코드들을 각각 다른 파일에 작성하는 방법도 있고 기능별로 묶어서 파일 하나에 작성하는 방법도 있다.

일반적으론 actions/constants/reducers 디렉토리로 구분하여 기능별로 각각 구현하지만 종류가 많아지면 3곳에 생성하고 매번 작성하는게 불편하게 느껴질수 있다.

modules라는 디렉토리에 하나의 파일에 액션, 액션 생성 함수, 리듀서를 몰아서 작성하는 `Ducks`라는패턴으로 작성해본다.

## redux-actions

redux를 기본적은 컨테이너를 통해 구성하였는데, 이번엔 `redux-actions`를 사용하여 더 짧고 간결하게 작성한다.

### todos부분에도 redux-actions 적용하기

해당부분에서도 똑같이 `redux-actions`를 적용하려고하는데, 액션 생성 함수가 조금 다른 점이 있다. `createAction`으로 필요한 추가 데이터는 payload라는 이름을 사용한다.

사용 예시

```js
const MY_ACTION = 'sample/MY_ACTION';
const myAction = createAction(MY_ACTION);
const action = myAction('hello world');
/**
 * result: {type: MY_ACTION, payload: "hello world"}
 **/
```

```js
const MY_ACTION = 'sample/MY_ACTION';
const myAction = createAction(MY_ACTION, (text) => `${text}!`);
const action = myAction('hello world');
/**
 * result: {type: MY_ACTION, payload: "hello world!"}
 **/
```

`**modules/todos.ts**`에서 hanldeActions쪽 타입스크립트로 타입 정의하는 부분에서 에러가 많이 발생해서 너무 많은 시간을 사용했다. 제대로 처리한건지에 대해서도 의문 추후 제대로 된 지식이 습득되면 수정 예정.

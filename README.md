# NestJS fundamentals

## 기본 구성

### app.module.ts

- root 모듈

### app.controller.ts

- url 요청
- 함수 실행 요청
- handles routing

### app.service.ts

- 비지니스 로직을 실행
- 데이터베이스 요청 등
- stores controllers for the routers

### cli 에서 만들기

- generate controller
- generate service

```bash
nest g co
nest g s
```

## DTO (data transfer object)

- DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
- 로직을 갖고 있지 않는 순수한 데이터 객체

## ValidationPipe

### whitelist: true

> 설정한 객체의 key가 아닌 값이 오면 해당 값을 제거

```js
export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
}

{
  title: 'abc'
  year: 1234
  hello: 'hello' // 제거되는 부분
}
```

### forbidNonWhitelisted: true

> 위 예제와 동일한 경우 HttpException을 던진다.

### transform: true

> 자동 타입 변환을 해준다

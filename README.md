# nestjs

app.module.ts

- root 모듈
  app.controller.ts
- url 요청
- 함수 실행 요청
- handles routing
  app.service.ts
- 비지니스 로직을 실행
- 데이터베이스 요청 등
- stores controllers for the routers

nest g co
컨트롤러를 generate

dto
data transfer object

1. whitelist: true
   클라이언트 측에서 전송한 데이터가 다음과 같을 경우
   {
   　 "title": "Tenet",
   　 "year": 2020,
   　 "genres": ["Action", "Sci-Fi"],
   　 "hack": "by me"
   }

whitelist: true 로 설정했을 때 아래와 같이 데코레이터가 없는 속성("hack")은 제거되어 저장됩니다.
{
　 id: 1,
　 title: 'Tenet',
　 year: 2020,
　 genres: ['Action', 'Sci-Fi'],
}

2. forbidNonWhitelisted: true
   클라이언트 측에서 전송한 데이터가 다음과 같을 경우
   {
   　 "title": "Tenet",
   　 "year": 2020,
   　 "genres": ["Action", "Sci-Fi"],
   　 "hack": "by me"
   }

"hack"이라는 속성은 화이트리스트에 존재하지 않으므로 HttpException 을 던집니다.

response :
{
　 "statusCode": 400,
　 "message": [ "property hack should not exist" ],
　 "error": "Bad Request"
}

transform
타입 변환

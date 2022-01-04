import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // express 의 라우터 같은 존재 ulr, 함수 실행
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

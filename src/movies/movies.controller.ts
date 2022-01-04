import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

// url은 /movies 즉 엔드포인트
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'All movie';
  }
  // @Param으로 원하는걸 요청해야 id : string으로 받아서 쓸 수 있다
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this will return one movie id:${id}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }
  // put은 전체를 업데이트함 Patch는 해당하는 것을 업데이트
  @Patch(':/id')
  path(@Param('id') movieId: string) {
    return `this will update movie id :${movieId}`;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete movie id :${movieId}`;
  }
}

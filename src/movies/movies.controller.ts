import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

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
  create(@Body() movieData) {
    return movieData;
  }
  // :id 보다 밑에 있으면 id로 인식하므로 위에 선언
  @Get('search')
  search(@Query('yaer') searchingYeaer: string) {
    return `we search this movie year: ${searchingYeaer}`;
  }
  // put은 전체를 업데이트함 Patch는 해당하는 것을 업데이트
  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete movie id :${movieId}`;
  }
}

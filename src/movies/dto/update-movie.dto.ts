import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType 필수 사항이 아닐 경우
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// import { IsString, IsNumber } from 'class-validator';

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

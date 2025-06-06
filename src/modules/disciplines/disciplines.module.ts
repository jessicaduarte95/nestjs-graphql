import { Module } from '@nestjs/common';
import { Discipline } from './entities/discipline.entity';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { DisciplineDTO } from './dto/discipline.dto';
import { UpdateDisciplineInput } from './dto/update-discipline.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],
      resolvers: [
        {
          DTOClass: DisciplineDTO,
          EntityClass: Discipline,
          CreateDTOClass: CreateDisciplineInput,
          UpdateDTOClass: UpdateDisciplineInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET, // Usado na paginação
        },
      ],
    }),
  ],
  providers: [],
})
export class DisciplinesModule {}

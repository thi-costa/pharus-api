import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolsController } from './schools.controller';
import { SchoolRepository } from './schools.repository';
import { SchoolsService } from './schools.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository])],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}

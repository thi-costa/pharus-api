import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateSchoolsController } from '@app/schools/contexts/createSchools/createSchools.controller';
import { SchoolRepository } from '@app/schools/schools.repository';
import { CreateSchoolsService } from '@app/schools/contexts/createSchools/createSchools.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository])],
  controllers: [CreateSchoolsController],
  providers: [CreateSchoolsService],
})
export class SchoolsModule {}

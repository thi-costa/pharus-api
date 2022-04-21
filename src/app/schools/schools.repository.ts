import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateSchoolDto } from '../../shared/dtos/schools/create-schools.dto';
import { School } from '../../shared/entities/schools/school.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(School)
export class SchoolRepository extends Repository<School> {
  private logger = new Logger('Schools repository', { timestamp: true });

  async createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    try {
      const school = this.create(createSchoolDto);
      this.logger.verbose(`School: ${JSON.stringify(school)}
       Created.`);
      return this.save(school);
    } catch (error) {
      this.logger.error(
        `Failed. School failed to creation: ${JSON.stringify(createSchoolDto)}`,
      );

      throw new InternalServerErrorException();
    }
  }
}

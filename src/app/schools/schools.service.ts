import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSchoolDto } from '@shared/dtos/schools/create-schools.dto';
import { School } from '@shared/entities/schools/school.entity';
import { SchoolRepository } from './schools.repository';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(SchoolRepository)
    private schoolRepository: SchoolRepository,
  ) {}

  private logger = new Logger('SchoolService', { timestamp: true });

  createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    this.logger.debug('CreateSchool called');
    return this.schoolRepository.createSchool(createSchoolDto);
  }
}

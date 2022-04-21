import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSchoolDto } from '@shared/dtos/schools/create-schools.dto';
import { School } from '@shared/entities/schools/school.entity';
import { SchoolRepository } from '@app/schools/schools.repository';

@Injectable()
export class CreateSchoolsService {
  constructor(
    @InjectRepository(SchoolRepository)
    private readonly schoolRepository: SchoolRepository,
  ) {}

  private logger = new Logger('SchoolService', { timestamp: true });

  createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    this.logger.debug('CreateSchool called');
    return this.schoolRepository.createSchool(createSchoolDto);
  }
}

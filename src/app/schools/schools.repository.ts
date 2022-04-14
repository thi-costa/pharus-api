import { Logger } from '@nestjs/common';
import { CreateSchoolDto } from '@shared/dtos/schools/create-schools.dto';
import { School } from '@shared/entities/schools/school.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(School)
export class SchoolRepository extends Repository<School> {
  private logger = new Logger('Schools repository', { timestamp: true });

  async createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    const { name, address, phone, username, email, password } = createSchoolDto;

    const school = this.create({
      name,
      address,
      phone,
      username,
      email,
      password,
    });
    this.logger.verbose(`School: ${school.username}`);
    await this.save(school);

    return school;
  }
}

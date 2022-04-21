import { Body, Controller, Logger, Post, Request } from '@nestjs/common';
import { CreateSchoolDto } from '@shared/dtos/schools/create-schools.dto';
import { School } from '@shared/entities/schools/school.entity';
import { CreateSchoolsService } from '@app/schools/contexts/createSchools/createSchools.service';

@Controller('schools')
export class CreateSchoolsController {
  constructor(private createSchoolsService: CreateSchoolsService) {}

  private logger = new Logger('SchoolController');

  @Post('/sign-up')
  createSchool(@Body() createSchoolDto: CreateSchoolDto): Promise<School> {
    this.logger.verbose(`
      School tried to sign up.`);

    return this.createSchoolsService.createSchool(createSchoolDto);
  }
}

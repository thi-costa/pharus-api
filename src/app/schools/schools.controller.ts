import { Body, Controller, Logger, Post, Request } from '@nestjs/common';
import { CreateSchoolDto } from '@shared/dtos/schools/create-schools.dto';
import { School } from '@shared/entities/schools/school.entity';
import { SchoolsService } from '@app/schools/schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private schoolsService: SchoolsService) {}

  private logger = new Logger('ProductController');

  @Post('/sign-in')
  createSchool(
    @Body() createSchoolDto: CreateSchoolDto,
    @Request() req,
  ): Promise<School> {
    this.logger.verbose(`
      School "${req.school.name}" was created.
      With the infomation: ${JSON.stringify(createSchoolDto)}
      `);

    return this.schoolsService.createSchool(createSchoolDto);
  }
}

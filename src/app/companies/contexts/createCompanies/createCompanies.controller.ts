import { Body, Controller, Logger, Post, Request } from '@nestjs/common';
import { CreateCompanyDto } from '../../../../shared/dtos/companies/create-companies.dto';
import { Company } from '../../../../shared/entities/companies/company.entity';
import { CreateCompaniesService } from '../../contexts/createCompanies/createCompanies.service';

@Controller('companies')
export class CreateCompaniesController {
  constructor(private createCompaniesService: CreateCompaniesService) {}

  private logger = new Logger('CreateCompanyController');

  @Post('/sign-in')
  createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @Request() req,
  ): Promise<Company> {
    this.logger.verbose(`
      Company "${req.company.name}" was created.
      With the infomation: ${JSON.stringify(createCompanyDto)}
      `);

    return this.createCompaniesService.createCompany(createCompanyDto);
  }
}

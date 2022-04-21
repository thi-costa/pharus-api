import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from '../../companies.repository';
import { CreateCompanyDto } from '../../../../shared/dtos/companies/create-companies.dto';
import { Company } from '../../../../shared/entities/companies/company.entity';

@Injectable()
export class CreateCompaniesService {
  constructor(
    @InjectRepository(CompanyRepository)
    private readonly companyRepository: CompanyRepository,
  ) {}

  private logger = new Logger('CreateCompanyService', { timestamp: true });

  createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    this.logger.debug('CreateCompany called');
    return this.companyRepository.createCompany(createCompanyDto);
  }
}

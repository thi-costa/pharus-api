import { Logger } from '@nestjs/common';
import { CreateCompanyDto } from '../../shared/dtos/companies/create-companies.dto';
import { Company } from '../../shared/entities/companies/company.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  private logger = new Logger('Companies repository', { timestamp: true });

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const { name, address, phone, email, username, password } =
      createCompanyDto;

    const company = this.create({
      name,
      address,
      phone,
      email,
      username,
      password,
    });
    this.logger.verbose(`Company: ${company.username}`);
    await this.save(company);

    return company;
  }
}

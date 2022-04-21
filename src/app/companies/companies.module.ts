import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepository } from './companies.repository';
import { CreateCompaniesController } from './contexts/createCompanies/createCompanies.controller';
import { CreateCompaniesService } from './contexts/createCompanies/createCompanies.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRepository])],
  controllers: [CreateCompaniesController],
  providers: [CreateCompaniesService],
})
export class CompaniesModule {}

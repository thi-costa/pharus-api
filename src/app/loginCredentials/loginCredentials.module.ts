import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginCredentialRepository } from './loginCredentials.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LoginCredentialRepository])],
  controllers: [],
  providers: [],
})
export class LoginCredentialsModule {}

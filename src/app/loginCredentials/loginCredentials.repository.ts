import { Logger } from '@nestjs/common';
import { LoginCredential } from '@shared/entities/loginCredentials/loginCredentials.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(LoginCredential)
export class LoginCredentialRepository extends Repository<LoginCredential> {
  private logger = new Logger('LoginCredential repository', {
    timestamp: true,
  });
}

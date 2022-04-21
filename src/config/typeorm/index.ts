import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface configByEnvironment {
  prd?: TypeOrmModuleOptions;
  local?: TypeOrmModuleOptions;
  development?: TypeOrmModuleOptions;
  staging?: TypeOrmModuleOptions;
}

export default (configService: ConfigService): TypeOrmModuleOptions => {
  const environment = configService.get<string>('nodeEnv', 'local');

  const environments: configByEnvironment = {
    local: {
      host: configService.get<string>('dbHost', 'localhost'),
      port: configService.get<number>('dbPort', 5432),
      username: configService.get<string>('dbUser', 'postgres'),
      password: configService.get<string>('dbPassword', '14040315'),
      database: configService.get<string>('dbName', 'pharus-db'),
      autoLoadEntities: true,
      entities: [
        'src/shared/entities/**/*.entity.ts',
        'dist/shared/entities/**/*.entity.{js,ts}',
      ],
      cli: {
        entitiesDir: 'src/shared/entities/**/'
      }
    },
  };

  const config = environments[environment];
  console.log(config);

  return {
    type: 'postgres',
    ...config,
  };
};

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envConfig from '@config/env';
import { SchoolsModule } from '@app/schools/schools.module';
import { CompaniesModule } from '@app/companies/companies.module';
import { School } from '@shared/entities/schools/school.entity';
import { Student } from '@shared/entities/students/student.entity';
import { Medal } from '@shared/entities/medals/medal.entity';
import { Project } from '@shared/entities/projects/project.entity';
import { Task } from '@shared/entities/tasks/task.entity';
import { Company } from '@shared/entities/companies/company.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([School, Student, Medal, Project, Task, Company]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        type: 'postgres',
        entities: [__dirname + '/shared/entities/**/*.entity{.js,.ts}'],
        seeds: [__dirname + '/config/typeorm/seeds/**'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    SchoolsModule,
    CompaniesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentsMigration1649361462534
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE gender AS ENUM ('M','F','OTHER');      
      CREATE TYPE school_shift AS ENUM ('MORNING','AFTERNOON','EVENING');
      CREATE TABLE students (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name varchar(255) NOT NULL,
        last_name varchar(255) NOT NULL,
        birth_date DATE NOT NULL,
        gender gender NOT NULL,
        phone int NOT NULL,
        school_shift school_shift NOT NULL,
        avatar varchar(255) NOT NULL,
        username varchar(255) NOT NULL UNIQUE,
        email varchar(255) NOT NULL UNIQUE,
        password varchar(255) NOT NULL,
        score int NOT NULL DEFAULT 0
        school_id UUID,
        medal_id UUID,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        deleted_at timestamp NOT NULL,
        FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
        FOREIGN KEY (medal_id) REFERENCES medals(id)       
      );
    `);

    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE students; DROP type gender; DROP type school_shift;`,
    );
  }
}

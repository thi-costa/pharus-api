import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjectsMigrationon1649448061212
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE medal AS ENUM ('diamond','ruby', 'emerald', 'saphire', 'platinum',
        'gold', 'silver','bronze');
      CREATE TABLE projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name varchar(255) NOT NULL,
        is_complete BOOLEAN NOT NULL,
        score int NOT NULL,
        medal medal NOT NULL,
        description varchar(255) NOT NULL,
        score_description varchar(255) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        rules varchar(255) NOT NULL,
        mentor_name varchar(255) NOT NULL,
        has_company_partnership BOOLEAN NOT NULL,
        company_id UUID,
        company_photo varchar(255),
        school_id UUID,
        completion_status int NOT NULL,
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        deleted_at timestamp NOT NULL,
        FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
        FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projects; DROP TYPE medal;`);
  }
}

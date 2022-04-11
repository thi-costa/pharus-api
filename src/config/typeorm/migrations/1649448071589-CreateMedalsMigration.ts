import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMedalsMigrationon1649448071589
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE medals (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        diamond INT NOT NULL DEFAULT 0,
        ruby INT NOT NULL DEFAULT 0,
        emerald INT NOT NULL DEFAULT 0,
        saphire INT NOT NULL DEFAULT 0,
        platinum INT NOT NULL DEFAULT 0,
        gold INT NOT NULL DEFAULT 0,
        silver INT NOT NULL DEFAULT 0,
        bronze INT NOT NULL DEFAULT 0,
        student_id UUID,        
        created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        deleted_at timestamp NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE medals;
    `);
  }
}

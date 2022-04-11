import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTasksMigrationon1649448032685 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE tasks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title varchar(255) NOT NULL,
        is_complete BOOLEAN NOT NULL,
        description varchar(255) NOT NULL,
        project_id UUID NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP,
        deleted_at timestamp,
        FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tasks`);
  }
}

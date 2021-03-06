import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStudentsMigration1649875936682
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE gender AS ENUM ('M','F','OTHER');
      CREATE TYPE school_shift AS ENUM ('MORNING','AFTERNOON','EVENING');
    `);

    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birth_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'gender',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'school_shift',
            type: 'school_shift',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'score',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'school_id',
            type: 'uuid',
          },
          {
            name: 'medal_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKSchoolStudent',
            referencedTableName: 'schools',
            referencedColumnNames: ['id'],
            columnNames: ['school_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKMedalStudent',
            referencedTableName: 'medals',
            referencedColumnNames: ['id'],
            columnNames: ['medal_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
    await queryRunner.query(`DROP type gender; DROP type school_shift;`);
  }
}

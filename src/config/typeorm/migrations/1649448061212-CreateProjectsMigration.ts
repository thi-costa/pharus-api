import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProjectsMigrationon1649448061212
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE medal AS ENUM ('diamond','ruby', 'emerald', 'saphire', 'platinum',
        'gold', 'silver','bronze');`);

    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'is_complete',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'score',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'medal',
            type: 'medal',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'score_description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'start_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'end_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'rules',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mentor_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'has_company_partnership',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'company_photo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'completion_status',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestampt',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestampt',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestampt',
            isNullable: false,
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCompanyProject',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKSchoolProject',
            referencedTableName: 'schools',
            referencedColumnNames: ['id'],
            columnNames: ['school_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );

    await queryRunner.query(`
      CREATE TYPE medal AS ENUM ('diamond','ruby', 'emerald', 'saphire', 'platinum',
        'gold', 'silver','bronze');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projects; DROP TYPE medal;`);
  }
}

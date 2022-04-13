import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMedalsMigrationon1649448071589
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'diamond',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          {
            name: 'ruby',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          ,
          {
            name: 'emerald',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          ,
          {
            name: 'saphire',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          ,
          {
            name: 'platinum',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          {
            name: 'gold',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          ,
          {
            name: 'bronze',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          ,
          {
            name: 'diamond',
            type: 'int',
            isNullable: false,
            default: 0,
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
            name: 'FKStudentMedal',
            referencedTableName: 'students',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE medals;`);
  }
}

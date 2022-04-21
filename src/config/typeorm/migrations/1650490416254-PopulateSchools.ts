import { School } from '../../../shared/entities/schools/school.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateSchools1650490416254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    const SchoolOne = await queryRunner.manager.save(
      queryRunner.manager.create<School>(School, {
        name: 'Colégio Atheneu',
        address: 'Rua Severina 144',
        phone: 8199999999,
        username: 'atheneu1950',
        email: 'atheneu@gmail.com',
        password: '123456789',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM schools`);
  }
}

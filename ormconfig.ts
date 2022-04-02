require('dotenv/config');
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '14040315',
  database: 'postgres',

  entities: ['dist/src/shared/**/*.entity.js'],

  synchronize: false,

  migrations: [
    'dist/src/config/migrations/*.js'
  ],
  cli: {
    migrationsDir: 'src/config/migrations'
  }
};

export default ormconfig;

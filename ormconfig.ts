require('dotenv/config');

const config: ConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  synchronize: false, // do not use TRUE in production (loss data)
  username: 'postgres',
  port: 5432,
  password: '14040315',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // We are using migrations, synchronize should be set to false.

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};

export default config;

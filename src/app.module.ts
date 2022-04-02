import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}

// src/data-source.ts
import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const database: string | undefined = process.env.PGDATABASE;

  const username: string | undefined = process.env.PGUSER;

  const password: string | undefined = process.env.PGPASSWORD;


  if (!database) throw new Error("Missing env var: 'DATABASE_URL' ");
  
  if (!username) throw new Error("Missing env var: 'PGUSER' ");

  if (!password) throw new Error("Missing env var: 'PGPASSWORD' ");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: database,
    username: username,
    password: password,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
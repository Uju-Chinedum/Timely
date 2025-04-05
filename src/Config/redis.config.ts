import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const redisConfig = {
  host: configService.get<string>('REDIS_HOST') || 'localhost',
  port: configService.get<number>('REDIS_PORT') || 6379,
  password: configService.get<string>('REDIS_PASSWORD') || undefined,
};

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: getEnvFilePath(),
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}

function getEnvFilePath() {
  return process.env.NODE_ENV?.trim() == 'development'
    ? '.env.development'
    : '.env.production';
}

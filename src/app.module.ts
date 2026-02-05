import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WatchesModule } from './watches/watches.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), WatchesModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { Metrics, MetricsSchema } from '../schemas/metrics.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Metrics.name, schema: MetricsSchema }]),
  ],
  controllers: [MetricsController],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}

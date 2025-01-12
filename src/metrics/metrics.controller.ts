import { Controller, Get, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Metrics } from '../schemas/metrics.schema';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  async getMetrics(@Query('campaignId') campaignId: string): Promise<Metrics> {
    return this.metricsService.getMetricsByCampaign(campaignId);
  }
}

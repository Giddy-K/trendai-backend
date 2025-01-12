import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Metrics } from '../schemas/metrics.schema';

@Injectable()
export class MetricsService {
  constructor(
    @InjectModel(Metrics.name) private readonly metricsModel: Model<Metrics>,
  ) {}

  async getMetricsByCampaign(campaignId: string): Promise<Metrics> {
    return this.metricsModel.findOne({ campaignId }).exec();
  }
}

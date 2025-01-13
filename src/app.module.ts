import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CampaignsModule } from './campaigns/campaigns.module';
import { MetricsModule } from './metrics/metrics.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { Metrics, MetricsSchema } from './schemas/metrics.schema';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InfluencersModule } from './influencers/influencers.module';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: Campaign.name, schema: CampaignSchema },
      { name: Metrics.name, schema: MetricsSchema },
    ]),
    CampaignsModule,
    MetricsModule,
    AuthModule,
    UserModule,
    InfluencersModule,
    SubmissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

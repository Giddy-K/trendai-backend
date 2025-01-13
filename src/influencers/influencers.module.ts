import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfluencersController } from './influencers.controller';
import { InfluencersService } from './influencers.service';
import { Influencer, InfluencerSchema } from '../schemas/influencers.schema';
import { SubmissionsModule } from 'src/submissions/submissions.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Influencer.name, schema: InfluencerSchema },
    ]),
    SubmissionsModule,
  ],
  controllers: [InfluencersController],
  providers: [InfluencersService],
})
export class InfluencersModule {}

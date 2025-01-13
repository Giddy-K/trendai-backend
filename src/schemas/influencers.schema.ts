import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InfluencerDocument = Influencer & Document;

@Schema()
export class Influencer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  campaignId: string;  // This is used to associate the influencer with a campaign

  @Prop()
  status: string;  // Status can be "approved", "pending", "rejected", etc.
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);

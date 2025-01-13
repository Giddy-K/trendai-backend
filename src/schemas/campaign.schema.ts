import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  contentLink?: string; // Make contentLink optional initially

  @Prop({ default: 'Pending' })
  status: string; // Example field for status
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

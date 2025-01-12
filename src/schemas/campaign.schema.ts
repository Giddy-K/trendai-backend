import { Schema, Document } from 'mongoose';
import {
  Prop,
  Schema as MongooseSchema,
  SchemaFactory,
} from '@nestjs/mongoose';

@MongooseSchema()
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  deadline: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

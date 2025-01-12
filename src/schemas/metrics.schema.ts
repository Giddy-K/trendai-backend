import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema()
export class Metrics extends Document {
  @Prop({ required: true })
  campaignId: string;

  @Prop({ required: true })
  totalPosts: number;

  @Prop({ required: true })
  engagement: number;

  @Prop({ required: true })
  submissionDates: Date[];
}

export const MetricsSchema = SchemaFactory.createForClass(Metrics);

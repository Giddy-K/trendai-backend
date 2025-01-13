import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop({ required: true })
  campaignId: string;

  @Prop({ required: true })
  influencerId: string;

  @Prop({ required: true })
  contentLink: string;

  @Prop({ required: true })
  submissionDate: Date;

  @Prop({ required: true, enum: ['pending', 'approved', 'rejected'] })
  status: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);

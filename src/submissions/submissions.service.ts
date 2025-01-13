import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from '../schemas/submission.schema';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name)
    private readonly submissionModel: Model<Submission>,
  ) {}

  // Get a submission by influencer ID and campaign ID
  async getSubmission(
    influencerId: string,
    campaignId: string,
  ): Promise<Submission> {
    return this.submissionModel.findOne({ influencerId, campaignId }).exec();
  }

  // Update the status of a submission
  async updateSubmissionStatus(
    influencerId: string,
    status: string,
  ): Promise<Submission> {
    return this.submissionModel
      .findOneAndUpdate(
        { influencerId, status: { $ne: 'approved' } }, // Prevent overwriting approved submissions
        { status },
        { new: true },
      )
      .exec();
  }
}

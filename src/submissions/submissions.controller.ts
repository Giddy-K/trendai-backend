import { Controller, Get, Patch, Param, Body, Query } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { Submission } from '../schemas/submission.schema';
import { UpdateSubmissionDto } from '../dto/update-submission.dto'; // Create DTO to handle status update

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  // Get submission by influencer ID and campaign ID
  @Get(':id')
  async getSubmission(
    @Param('id') influencerId: string,
    @Query('campaignId') campaignId: string,
  ): Promise<Submission> {
    return this.submissionsService.getSubmission(influencerId, campaignId);
  }

  // Update the submission status for a specific influencer
  @Patch(':id/status')
  async updateSubmissionStatus(
    @Param('id') influencerId: string,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ): Promise<any> {
    return this.submissionsService.updateSubmissionStatus(
      influencerId,
      updateSubmissionDto.status,
    );
  }
}

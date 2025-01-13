import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { InfluencersService } from './influencers.service';
import { CreateInfluencerDto } from '../dto/create-influencer.dto';
import { Influencer } from '../schemas/influencers.schema';
import { SubmissionsService } from '../submissions/submissions.service'; // Assuming this service handles submissions
import { Submission } from '../schemas/submission.schema'; // Import your Submission schema

@Controller('influencers')
export class InfluencersController {
  constructor(
    private readonly influencerService: InfluencersService,
    private readonly submissionService: SubmissionsService,
  ) {}

  // Get all influencers by campaign ID
  @Get()
  async getInfluencers(
    @Query('campaignId') campaignId: string,
  ): Promise<Influencer[]> {
    return this.influencerService.getInfluencersByCampaign(campaignId);
  }

  // Get a single influencer by ID
  @Get(':id')
  async getInfluencer(@Param('id') id: string): Promise<Influencer> {
    return this.influencerService.getInfluencerById(id);
  }

  // Create a new influencer
  @Post()
  async createInfluencer(
    @Body() createInfluencerDto: CreateInfluencerDto,
  ): Promise<Influencer> {
    return this.influencerService.createInfluencer(createInfluencerDto);
  }

  // Update an influencer's status
  @Patch(':id/status')
  async updateInfluencerStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Promise<any> {
    return this.influencerService.updateInfluencerStatus(id, status);
  }

  // Get submission for a specific influencer by ID
  @Get(':id/submission')
  async getSubmission(
    @Param('id') influencerId: string,
    @Query('campaignId') campaignId: string,
  ): Promise<Submission> {
    return this.submissionService.getSubmission(influencerId, campaignId);
  }

  // Update the submission status for a specific influencer
  @Patch(':id/submission')
  async updateSubmissionStatus(
    @Param('id') influencerId: string,
    @Body() updateStatusDto: { status: string },
  ): Promise<any> {
    await this.submissionService.updateSubmissionStatus(
      influencerId,
      updateStatusDto.status,
    );
    return { message: 'Submission approved.' };
  }
}

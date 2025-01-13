import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from '../schemas/campaign.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignsService.getAllCampaigns();
  }

  // Add this method to handle the request for a specific campaign by its ID
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getCampaignById(@Param('id') id: string): Promise<Campaign> {
    return this.campaignsService.getCampaignById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/submit')
  async submitCampaign(
    @Param('id') id: string,
    @Body() body: { contentLink: string },
  ): Promise<{ message: string }> {
    // Call a service function to handle campaign submission (optional)
    await this.campaignsService.submitCampaign(id, body.contentLink);

    return { message: `Campaign with ID ${id} has been successfully submitted.` };
  }
}

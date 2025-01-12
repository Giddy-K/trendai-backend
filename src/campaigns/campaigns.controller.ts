import { Controller, Get } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from '../schemas/campaign.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignsService.getAllCampaigns();
  }
}

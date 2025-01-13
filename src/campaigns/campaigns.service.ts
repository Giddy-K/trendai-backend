import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from '../schemas/campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
  ) {}

  async getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignModel.find().exec();
  }

  async getCampaignById(id: string): Promise<Campaign> {
    const campaign = await this.campaignModel.findById(id).exec();
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found.`);
    }
    return campaign;
  }

  async submitCampaign(id: string, contentLink: string): Promise<void> {
    try {
      const campaign = await this.campaignModel.findById(id).exec();

      if (!campaign) {
        throw new NotFoundException(`Campaign with ID ${id} not found.`);
      }

      // Update contentLink and status
      campaign.contentLink = contentLink;
      campaign.status = 'Submitted';

      await campaign.save();
    } catch (error) {
      console.error(`Error submitting campaign with ID ${id}: `, error);
      throw new InternalServerErrorException('An error occurred while submitting the campaign.');
    }
  }
}

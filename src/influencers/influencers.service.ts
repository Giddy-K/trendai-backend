import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Influencer, InfluencerDocument } from '../schemas/influencers.schema';

@Injectable()
export class InfluencersService {
  constructor(
    @InjectModel(Influencer.name) private readonly influencerModel: Model<InfluencerDocument>,
  ) {}

  // Get all influencers associated with a campaign
  async getInfluencersByCampaign(campaignId: string): Promise<Influencer[]> {
    return this.influencerModel.find({ campaignId }).exec();
  }

  // Get a specific influencer by ID
  async getInfluencerById(id: string): Promise<Influencer> {
    return this.influencerModel.findById(id).exec();
  }

  // Create a new influencer
  async createInfluencer(createInfluencerDto: any): Promise<Influencer> {
    const influencer = new this.influencerModel(createInfluencerDto);
    return influencer.save();
  }

  // Update an influencer's status
  async updateInfluencerStatus(id: string, status: string): Promise<any> {
    return this.influencerModel.updateOne({ _id: id }, { $set: { status } }).exec();
  }
}

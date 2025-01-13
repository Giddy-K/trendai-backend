import * as mongoose from 'mongoose';
import { Campaign, CampaignSchema } from './src/schemas/campaign.schema';
import { Submission, SubmissionSchema } from './src/schemas/submission.schema';
import { Influencer, InfluencerSchema } from './src/schemas/influencers.schema';
import { Metrics, MetricsSchema } from './src/schemas/metrics.schema';
import { User, UserSchema } from './src/schemas/user.schema';

async function seedDatabase() {
  // Connect to MongoDB
  await mongoose.connect(
    'mongodb+srv://gideonvertox:BMengC1f1GimReD5@cluster0.ghrnd.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0',
  );

  // Models for each schema
  const CampaignModel = mongoose.model('Campaign', CampaignSchema);
  const SubmissionModel = mongoose.model('Submission', SubmissionSchema);
  const InfluencerModel = mongoose.model('Influencer', InfluencerSchema);
  const MetricsModel = mongoose.model('Metrics', MetricsSchema);
  const UserModel = mongoose.model('User', UserSchema);

  // Clear existing data
  await CampaignModel.deleteMany({});
  await SubmissionModel.deleteMany({});
  await InfluencerModel.deleteMany({});
  await MetricsModel.deleteMany({});
  await UserModel.deleteMany({});

  // Insert dummy campaigns
  const campaigns = await CampaignModel.insertMany([
    {
      name: 'Campaign 1',
      description: 'Post 3 pictures on Instagram with hashtags.',
      status: 'active',
    },
    {
      name: 'Campaign 2',
      description: 'Share a video on TikTok promoting our product.',
      status: 'inactive',
    },
  ]);

  console.log('Inserted campaigns:', campaigns);

  // Insert dummy influencers
  const influencers = await InfluencerModel.insertMany([
    {
      name: 'Influencer 1',
      email: 'influencer1@example.com',
      campaignId: campaigns[0]._id,
      status: 'approved',
    },
    {
      name: 'Influencer 2',
      email: 'influencer2@example.com',
      campaignId: campaigns[1]._id,
      status: 'pending',
    },
  ]);

  console.log('Inserted influencers:', influencers);

  // Insert dummy metrics
  const metrics = await MetricsModel.insertMany([
    {
      campaignId: campaigns[0]._id,
      totalPosts: 50,
      engagement: 2000,
      submissionDates: [new Date('2025-01-05T00:00:00Z'), new Date('2025-01-06T00:00:00Z')],
    },
    {
      campaignId: campaigns[1]._id,
      totalPosts: 30,
      engagement: 1500,
      submissionDates: [new Date('2025-01-10T00:00:00Z')],
    },
  ]);

  console.log('Inserted metrics:', metrics);

  // Insert dummy submissions
  const submissions = await SubmissionModel.insertMany([
    {
      campaignId: campaigns[0]._id,
      influencerId: influencers[0]._id,
      contentLink: 'https://instagram.com/post1',
      submissionDate: new Date('2025-01-05T00:00:00Z'),
      status: 'approved',
    },
    {
      campaignId: campaigns[0]._id,
      influencerId: influencers[1]._id,
      contentLink: 'https://vm.tiktok.com/ZMk5KWsm5/',
      submissionDate: new Date('2025-01-06T00:00:00Z'),
      status: 'pending',
    },
  ]);

  console.log('Inserted submissions:', submissions);

  // Insert dummy users (Admin and Regular User)
  const users = await UserModel.insertMany([
    {
      username: 'admin@example.com',
      password: 'admin123', // Use hashed passwords in production
      role: 'admin',
    },
    {
      username: 'user1@example.com',
      password: 'user123', // Use hashed passwords in production
      role: 'user',
    },
  ]);

  console.log('Inserted users:', users);

  // Close connection
  await mongoose.disconnect();
}

seedDatabase()
  .then(() => console.log('Seeding complete'))
  .catch((err) => console.error('Error seeding database:', err));

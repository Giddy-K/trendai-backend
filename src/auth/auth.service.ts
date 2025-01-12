import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.toObject(); // Remove password from response
      return result;
    }
    throw new UnauthorizedException();
  }

  async login(user: any): Promise<{ accessToken: string }> {
    const payload = { username: user.username, sub: user._id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }  
}

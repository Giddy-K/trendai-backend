import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SignupDto } from '../dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    const { username, password, role } = signupDto;
    return this.userService.createUser(username, password, role);
  }

  @Post('login')
  async login(
    @Body() user: { username: string; password: string },
  ): Promise<{ accessToken: string }> {
    const validatedUser = await this.authService.validateUser(
      user.username,
      user.password,
    );
    if (!validatedUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(validatedUser);
  }
}

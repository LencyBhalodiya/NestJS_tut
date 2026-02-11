import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() body: any) {
        console.log(body);
        return { 'message': 'Login successful', 'username': body };
        // return await this.authService.signIn(username, password);
    }
}

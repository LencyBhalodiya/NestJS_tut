import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }
    
    async register(email: string, password: string) {
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser) throw new UnauthorizedException('User already exists');
        
        // Hash the password before storing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const result: any = await this.userService.create({ 
            email, 
            password: hashedPassword 
        });
        delete result.password;
        return result;
    }
}

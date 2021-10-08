import { IsDate, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;

    @IsDate()
    deleted_at: Date;
}

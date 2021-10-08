import {IsNotEmpty} from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateCandidateDto {
    @IsNotEmpty()
    user_id: User;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;
}

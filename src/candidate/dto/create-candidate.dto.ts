import {IsNotEmpty} from "class-validator";

export class CreateCandidateDto {
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;
}

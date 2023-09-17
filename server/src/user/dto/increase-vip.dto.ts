import { IsNotEmpty, IsNumber } from "class-validator";

export class IncreaseVipDTO {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    days: number;

}
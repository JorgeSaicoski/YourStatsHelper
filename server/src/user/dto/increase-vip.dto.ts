import { IsNotEmpty, IsNumber } from "class-validator";

export class IncreaseVipDTO {

    @IsNotEmpty()
    @IsNumber()
    days: number;

}
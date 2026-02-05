import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class CreateWatchDto {
  @IsString()
  @IsNotEmpty()
  brand: string
  
  @IsString()
  @IsNotEmpty()
  model: string
  
  @IsString()
  @IsNotEmpty()
  movement_type: string
  
  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  price: number

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  water_resistance: number
}

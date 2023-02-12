import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString, Length, Min, Max } from "class-validator";

export class AdminForm {   
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid name. Name should be a string *"})
    @Length(3,20, {message: "Name needs to be at least 3 characters and less than 20 characters"})
    name: string;

    @IsOptional()
    @IsInt({message: "Invalid age"})
    @Min(20, {message:"Sorry you are underage. You have to be at least 20 years old"})
    age: number;

    @IsNotEmpty({message: "Please enter your email address*"})
    @IsEmail()
    email: string;

    @IsNotEmpty({message:"Please enter your contact Number *"})
    @Length(11,11, {message:"Invalid Phone number*"})
    contactNo:string;
}
export class updateForm {   
   
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid name. Name should be a string *"})
    name: string;
    @IsOptional()
    @IsInt({message: "Invalid age"})
    @Min(20, {message:"Sorry you are underage. You have to be at least 20 years old"})
    age: number;
    @IsNotEmpty({message: "Please enter your email address*"})
    @IsEmail()
    email: string;
    @IsNotEmpty({message:"Please enter your contact Number *"})
    @Length(11,11, {message:"Invalid Phone number*"})
    contactNo:string;



}
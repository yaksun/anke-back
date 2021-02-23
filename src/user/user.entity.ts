import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class User{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    username:String;

    @Column()
    password:String;

    @Column()
    roleId:Number

}
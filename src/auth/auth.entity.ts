import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Auth{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    authname:String;

    @Column()
    status:Boolean
}
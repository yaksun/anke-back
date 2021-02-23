import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Role{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    fullname:String;

    @Column()
    authIds:String;

}
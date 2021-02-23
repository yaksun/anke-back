
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Cate{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    title:String;

}
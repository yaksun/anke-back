
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Card{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    title:String;

    @Column()
    content:String;

    @Column()
    cateId:Number; 

    @Column()
    leavel:Number; 

    @Column('double')
    nextShowTime:Number;

    @Column('double')
    lastShowTime:Number;

}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Cate{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column({ type: "longtext" })
    img_path:String;

    @Column({ type: "longtext" })
    thumb_path:String;


}
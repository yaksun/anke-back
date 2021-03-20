
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Cate{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column({default:''})
    img_path:String;

    @Column({default:''})
    thumb_path:String;

}
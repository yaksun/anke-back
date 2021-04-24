
import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';
import {Cate} from '../cate/cate.entity'
@Entity() 
export class Card{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column({default:''})
    trade_date:String;

    @Column({default:''})
    trade_no:String;

    @Column({default:''})
    trade_type:String; 

    @Column({default:''})
    security_code:String; 

    @Column({default:''})
    security_name:String;

    @Column({default:''})
    security_class :String 

    @Column('decimal',{default:0})
    proxy_price:Number;

    @Column('decimal',{default:0})
    real_price:Number;

    @Column('decimal',{default:0})
    sl_price:Number;

    @Column('decimal',{default:0})
    tl_price:Number;

    @Column('decimal',{default:0})
    commission:Number;

    @Column('decimal',{default:0})
    profit:Number;

    @Column({default:''})
    reason:String;

    @Column('decimal',{default:0})
    verify:Number;

    @Column('decimal',{default:0})
    floating_loss:Number;

    @Column('decimal',{default:0})
    floating_profit:Number;

    @Column({default:''})
    remark:String;

    @Column({default:0})
    status:Number
    
    @Column({default:0})
    cateId:Number

    // @OneToOne(type => Cate)
    // @JoinColumn()
    // cate: Cate;

}

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

    @Column('double')
    proxy_price:Number;

    @Column('double')
    real_price:Number;

    @Column('double')
    sl_price:Number;

    @Column('double')
    tl_price:Number;

    @Column('double')
    commission:Number;

    @Column('double')
    profit:Number;

    @Column({default:''})
    reason:String;

    @Column('double')
    verify:Number;

    @Column('double')
    floating_loss:Number;

    @Column('double')
    floating_profit:Number;

    @Column({default:''})
    remark:String;

    @OneToOne(type => Cate)
    @JoinColumn()
    cate: Cate;

}

import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';
@Entity() 
export class TradingLog{
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

    
    @Column('decimal', { precision: 10, scale: 2,default:0 })
    security_num:Number;

    @Column({default:''})
    security_class :String 

    @Column('decimal', { precision: 10, scale: 2,default:0 })
    proxy_price:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    real_price:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    sl_price:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    tl_price:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    commission:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    profit:Number;

    @Column({default:''})
    reason:String;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    verify:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    floating_loss:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    floating_profit:Number;

    @Column({default:''})
    remark:String;

    @Column({default:0})
    status:Number
    
    @Column({default:0})
    img_id:Number


    @Column('decimal',{ precision: 10 })
    user_id:Number

    // @OneToOne(type => Cate)
    // @JoinColumn()
    // cate: Cate;

}
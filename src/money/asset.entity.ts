
import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';

@Entity() 
export class Asset{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    cash:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    money_manage:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    fund:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    stock:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    xauusd:Number;

    // debenture 债券
    @Column('decimal',{ precision: 10, scale: 2 })
    debenture:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    others:Number;

    @Column('decimal',{ precision: 10, scale: 2 })
    total:Number;

    @Column({default:''})
    remark:String;

    @Column({default:''})
    s_time :String 


    @Column({default:''})
    e_time :String 
}
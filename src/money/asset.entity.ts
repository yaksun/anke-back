
import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';

@Entity() 
export class Asset{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    cash:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    money_manage:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    fund:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    stock:Number;

    @Column('decimal',{ precision: 10, scale: 2 ,default:0})
    xauusd:Number;

    // debenture 债券
    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    debenture:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    others:Number;

    @Column('decimal',{ precision: 10, scale: 2,default:0 })
    total:Number;

    @Column({default:''})
    remark:String;

    @Column('decimal',{default:0,precision:14})
    s_time :Number 


    @Column('decimal',{default:0,precision:14 })
    e_time :Number 
}
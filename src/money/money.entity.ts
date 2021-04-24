
import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn} from 'typeorm';

@Entity() 
export class Money{
    @PrimaryGeneratedColumn()
    id:Number;

    @Column('decimal',{default:0})
    cash:Number;

    @Column('decimal',{default:0})
    money_manage:Number;

    @Column('decimal',{default:0})
    fund:Number;

    @Column('decimal',{default:0})
    stock:Number;

    @Column('decimal',{default:0})
    xauusd:Number;

    @Column('decimal',{default:0})
    others:Number;

    @Column({default:''})
    s_time :String 


    @Column({default:''})
    e_time :String 
}
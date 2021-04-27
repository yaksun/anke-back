import { Repository } from 'typeorm';
import { Cate } from './cate.entity';
export declare class CateService {
    private cateRepository;
    constructor(cateRepository: Repository<Cate>);
    findById(params: Record<string, unknown>): Promise<any>;
    getCateList(): Promise<any[]>;
    addCate(params: Record<string, unknown>): Promise<any>;
    updCate(id: number, params: Record<string, unknown>): Promise<any>;
    delCate(id: number): Promise<any>;
}

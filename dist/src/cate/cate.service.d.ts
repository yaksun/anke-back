import { Repository } from 'typeorm';
import { Images } from './images.entity';
export declare class CateService {
    private cateRepository;
    constructor(cateRepository: Repository<Images>);
    findById(params: Record<string, unknown>): Promise<any>;
    getCateList(): Promise<any[]>;
    addCate(params: Record<string, unknown>): Promise<any>;
    updCate(id: number, params: Record<string, unknown>): Promise<any>;
    delCate(id: number): Promise<any>;
}

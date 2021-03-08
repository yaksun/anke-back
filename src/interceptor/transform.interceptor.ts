import {
    Injectable,
    NestInterceptor,
    CallHandler,
    ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Response<T> {
    data: T;
}

/**
 * 全局数据返回拦截器
 */
@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, Response<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler<T>,
    ): Observable<Response<T>> {
        return next.handle().pipe(
            map(data => {
                console.log(data,'------------')
                return {
                    data: data,
                    code: 200,
                    msg: 'SUCCESS',
                    success: true
                };
            }),
        );
    }
}

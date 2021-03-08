const config = {
    connectMicroservice: 3001, // 微服务端口
    port: 8881,
    tokenSetTimeOut: 7200,
    globalPrefix: 'mthanos-nest/v1.0',
};
export const mysqlConfig = {
    host: 'localhost',
    userName: 'root',
    password: '123456',
    database: 'b_simple_user_center' //mThanos_db
};
export const redisConfig = {
    name: 'user_token',
    url: 'redis://127.0.0.1:6379',
    // url: 'redis://127.0.0.1:6379',
};
export const redisCacheConfig = {
    host: '127.0.0.1',
    port: 6379,
    ttl: 10, // seconds
    max: 150, // seconds
};
export const emailConfig = {
    authPass: '', // qq邮箱授权码
    fromUser: '',
    user: '',
};

export default config;

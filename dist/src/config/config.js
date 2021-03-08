"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailConfig = exports.redisCacheConfig = exports.redisConfig = exports.mysqlConfig = void 0;
const config = {
    connectMicroservice: 3001,
    port: 8881,
    tokenSetTimeOut: 7200,
    globalPrefix: 'mthanos-nest/v1.0',
};
exports.mysqlConfig = {
    host: 'localhost',
    userName: 'root',
    password: '123456',
    database: 'b_simple_user_center'
};
exports.redisConfig = {
    name: 'user_token',
    url: 'redis://127.0.0.1:6379',
};
exports.redisCacheConfig = {
    host: '127.0.0.1',
    port: 6379,
    ttl: 10,
    max: 150,
};
exports.emailConfig = {
    authPass: '',
    fromUser: '',
    user: '',
};
exports.default = config;
//# sourceMappingURL=config.js.map
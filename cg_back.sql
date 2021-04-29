/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.211
Source Server Version : 50733
Source Host           : 192.168.1.211:3399
Source Database       : cg_back

Target Server Type    : MYSQL
Target Server Version : 50733
File Encoding         : 65001

Date: 2021-04-29 21:45:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `asset`
-- ----------------------------
DROP TABLE IF EXISTS `asset`;
CREATE TABLE `asset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cash` decimal(10,2) NOT NULL DEFAULT '0.00',
  `money_manage` decimal(10,2) NOT NULL DEFAULT '0.00',
  `fund` decimal(10,2) NOT NULL DEFAULT '0.00',
  `stock` decimal(10,2) NOT NULL DEFAULT '0.00',
  `xauusd` decimal(10,2) NOT NULL DEFAULT '0.00',
  `debenture` decimal(10,2) NOT NULL DEFAULT '0.00',
  `others` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `remark` varchar(255) NOT NULL DEFAULT '',
  `s_time` decimal(14,0) NOT NULL DEFAULT '0',
  `e_time` decimal(14,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of asset
-- ----------------------------
INSERT INTO `asset` VALUES ('1', '2.00', '3.00', '3.00', '3.00', '3.00', '3.00', '3.00', '3.00', 'yy', '20210428050534', '20210428053100');
INSERT INTO `asset` VALUES ('2', '313221.64', '3697.00', '3081.00', '3.00', '0.00', '3.00', '0.00', '320000.00', '天天基金', '20210428053100', '99991231000000');

-- ----------------------------
-- Table structure for `auth`
-- ----------------------------
DROP TABLE IF EXISTS `auth`;
CREATE TABLE `auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authname` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth
-- ----------------------------

-- ----------------------------
-- Table structure for `cate`
-- ----------------------------
DROP TABLE IF EXISTS `cate`;
CREATE TABLE `cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_path` longtext NOT NULL,
  `thumb_path` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of cate
-- ----------------------------
INSERT INTO `cate` VALUES ('3', '', '');
INSERT INTO `cate` VALUES ('4', '/api/uploads/2021042714041597075.jpg', '/api/uploads/2021042714041597075.jpg');
INSERT INTO `cate` VALUES ('5', '', '');
INSERT INTO `cate` VALUES ('6', '', '');
INSERT INTO `cate` VALUES ('7', '', '');
INSERT INTO `cate` VALUES ('8', '', '');
INSERT INTO `cate` VALUES ('9', '', '');
INSERT INTO `cate` VALUES ('10', '', '');
INSERT INTO `cate` VALUES ('11', '', '');
INSERT INTO `cate` VALUES ('12', '', '');
INSERT INTO `cate` VALUES ('13', '', '');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `authIds` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for `trading_log`
-- ----------------------------
DROP TABLE IF EXISTS `trading_log`;
CREATE TABLE `trading_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trade_date` varchar(255) NOT NULL DEFAULT '',
  `trade_no` varchar(255) NOT NULL DEFAULT '',
  `trade_type` varchar(255) NOT NULL DEFAULT '',
  `security_code` varchar(255) NOT NULL DEFAULT '',
  `security_name` varchar(255) NOT NULL DEFAULT '',
  `security_class` varchar(255) NOT NULL DEFAULT '',
  `proxy_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `real_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `sl_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `tl_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `commission` decimal(10,2) NOT NULL DEFAULT '0.00',
  `profit` decimal(10,2) NOT NULL DEFAULT '0.00',
  `reason` varchar(255) NOT NULL DEFAULT '',
  `verify` decimal(10,2) NOT NULL DEFAULT '0.00',
  `floating_loss` decimal(10,2) NOT NULL DEFAULT '0.00',
  `floating_profit` decimal(10,2) NOT NULL DEFAULT '0.00',
  `remark` varchar(255) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT '0',
  `cateId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of trading_log
-- ----------------------------
INSERT INTO `trading_log` VALUES ('1', '2021-01-10 00:00:00', '', 'buy', '010992', '东财中证500A', '基金', '0.00', '1000.00', '0.00', '0.00', '0.00', '0.00', '年初想定投', '0.00', '0.00', '0.00', '![file](http://192.168.1.211:9200/api/uploads/2021042714041597075.jpg)\n', '0', '4');
INSERT INTO `trading_log` VALUES ('2', '2020-09-03 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '5');
INSERT INTO `trading_log` VALUES ('3', '2020-10-08 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '6');
INSERT INTO `trading_log` VALUES ('4', '2020-11-04 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '7');
INSERT INTO `trading_log` VALUES ('5', '2020-12-04 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '8');
INSERT INTO `trading_log` VALUES ('6', '2020-12-17 00:00:00', '中海', 'sell', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '想定投指数可能会更高', '0.00', '0.00', '0.00', '', '0', '9');
INSERT INTO `trading_log` VALUES ('7', '2021-01-04 00:00:00', '中海', 'buy', '399011', '399011', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '10');
INSERT INTO `trading_log` VALUES ('8', '2021-02-04 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '11');
INSERT INTO `trading_log` VALUES ('9', '2021-03-04 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '12');
INSERT INTO `trading_log` VALUES ('10', '2021-04-06 00:00:00', '中海', 'buy', '399011', '中海医疗保健主题股票', '基金', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '定投500', '0.00', '0.00', '0.00', '', '0', '13');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'yaksun', '123', '1');

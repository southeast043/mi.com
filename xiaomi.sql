-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-05-16 16:02:20
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `xiaomi`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品ID',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `type` varchar(255) NOT NULL COMMENT '商品价格、商品原价、商品样式',
  `home` varchar(255) NOT NULL COMMENT '商品图片、商品简介',
  `slideshow` varchar(255) NOT NULL COMMENT '轮播图',
  `detailpicture` text NOT NULL COMMENT '商品详情',
  `detail` text NOT NULL COMMENT '商品描述'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `type`, `home`, `slideshow`, `detailpicture`, `detail`) VALUES
(1, '小米全面屏电视65英寸 E65X', '[{\"price\":\"3099\",\"oldprice\":\"3299\",\"color\":\"黑色\",\"size\":\"65英寸\"}]', '[{\"src\":\"img/appliance-1-1.webp\",\"alt\":\"\",\"intro\":\"全面屏设计\"}]', '[{\"src\":\"img/detail-1-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-1-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-1-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-1-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-1-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-1-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-5.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-6.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-7.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-8.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-9.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-10.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-11.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-12.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-13.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-14.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-15.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-16.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-17.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-18.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-19.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-20.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-21.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-22.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-1-23.jpg\",\"alt\":\"\"}]', '全面屏/4K HDR/内置小爱同学/杜比+DTS/64位四核处理器'),
(2, '全面屏电视E43K', '[{\"price\":\"1499\",\"oldprice\":\"1599\",\"color\":\"黑色\",\"size\":\"43英寸\"}]', '[{\"src\":\"img/appliance-1-2.webp\",\"alt\":\"\",\"intro\":\"全面屏设计，海量内容\"}]', '[{\"src\":\"img/detail-2-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-2-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-2-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-2-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-2-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-2-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-2-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-2-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-2-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-2-5.jpg\",\"alt\":\"\"}]', '全面屏设计/无边视野/世界精彩一览无余'),
(3, '小米电视4A 70英寸', '[{\"price\":\"3799\",\"oldprice\":\"3999\",\"color\":\"黑色\",\"size\":\"70英寸\"}]', '[{\"src\":\"img/appliance-1-3.webp\",\"alt\":\"\",\"intro\":\"大屏更享受\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '70英寸震撼巨屏 / 4K画质 细腻如真 / 杜比音效 身临其境 / PatchWall智能系统 内置小爱同学 / 海量好内容'),
(4, '米家互联网对开门冰箱 540L', '[{\"price\":\"2899\",\"oldprice\":\"3699\",\"color\":\"黑色\",\"size\":\"70英寸\"}]\r\n', '[{\"src\":\"img/appliance-1-4.webp\",\"alt\":\"\",\"intro\":\"重磅新品福利特惠\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '风冷无霜/环绕出风/纤薄箱体/电脑控温,持久保鲜/智能互联'),
(5, '  Redmi全自动波轮洗衣机1A 8kg', '[{\"price\":\"899\",\"oldprice\":\"899\",\"color\":\"黑色\",\"size\":\"70英寸\"}]', '[{\"src\":\"img/appliance-1-5.webp\",\"alt\":\"\",\"intro\":\"一键操作，父母都爱用\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '8kg大容量 / 10种洗涤模式 / 10挡水位调节 / 耐腐蚀金属机身 / 桶自洁、桶风干模式避免细菌滋生 / 空气阻尼减震 / 免运费及基础安装费'),
(6, '米家电烤箱', '[{\"price\":\"299\",\"oldprice\":\"2298\",\"color\":\"黑色\",\"size\":\"70英寸\"}]', '[{\"src\":\"img/appliance-1-6.webp\",\"alt\":\"\",\"intro\":\"全能烘焙体验\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '32L大容积 / 上下独立控温 / 旋转烤叉 / 热风循环 / 40°C恒温发酵 / 120分钟定时 / 支持免定时持续运行'),
(7, '米家互联网烟灶套装（天然气）', '[{\"price\":\"2298\",\"color\":\"黑色\",\"size\":\"70英寸\"}]', '[{\"src\":\"img/appliance-1-7.webp\",\"alt\":\"\",\"intro\":\"点火排烟，风随火动\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '烟灶联动 /缔造爆炒大吸力 / 跨界创新一体式集烟腔 / 自动巡航增压 / 磁吸隐藏式油杯 / 易清洁'),
(8, '小米米家空气净化器 2S', '[{\"price\":\"749\",\"color\":\"黑色\",\"size\":\"70英寸\"}]', '[{\"src\":\"img/appliance-1-8.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-3-1.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-3-5.jpg\",\"alt\":\"\"}]', '[{\"src\":\"img/detail-banner-3-1.jpeg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-2.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-3.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-4.jpg\",\"alt\":\"\"},{\"src\":\"img/detail-banner-3-5.jpg\",\"alt\":\"\"}]', '烟灶联动 /缔造爆炒大吸力 / 跨界创新一体式集烟腔 / 自动巡航增压 / 磁吸隐藏式油杯 / 易清洁');

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `phone` varchar(255) NOT NULL COMMENT '手机号码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`id`, `username`, `password`, `phone`) VALUES
(1, 'admin', 'a123456', '18888888888'),
(2, '11111111111', '11111111111', '11111111111'),
(3, '22222222222', 'a123456', '22222222222'),
(4, 'root', 'root', '11122233344');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品ID', AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

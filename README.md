# yuque-lint

> 语雀的在线 markdown 校验服务，基于 [lint-md](https://github.com/hustcc/lint-md)。

示例服务：[yuque.hust.cc](http://yuque.hust.cc)。



## 安装

> npm i -g yuque-lint

安装之后获取一个一个命令 `yuque-lint`。



## 使用

 - 启动服务

```bash
Usage: <yuque-lint> [options]

Yuque.com lint server

Options:
  -v, --version                     output the version number
  -p, --port [server-port]          yuque-lint service port, default 8527
  -c, --configure [configure-file]  lint-md's .lintmdrc configure file, default empty
  -h, --help                        output usage information
```

直接执行 `yuque-lint` 命令，就可以访问 `ip:8527` 打开服务了！


 - 创建钉钉机器人

创建之后，会获取一个 `机器人 token`。

 - 添加语雀 web hook
 
在语雀文档的 `管理` - `开发者设置` 中，添加 web hook 地址，地址规则为：`http://ip:port/token`。例如：

> http://yuque.hust.cc/cad1a0e0fa14cc69bca7e4ce84893f298cbf695af59a91b3cce408be9ed29567


## License

MIT@[hustcc](https://github.com/hustcc).

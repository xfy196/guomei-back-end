const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const Router = require("koa-router");

const router = new Router();

const koa = new Koa();

koa.use(bodyParser());

const userRouter = require("./router/userRouter");

router.use("/user", userRouter.routes());

koa.use(async (ctx, next) => {
    ctx.res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      })
    await next();
})

koa.use(router.routes(), router.allowedMethods())

koa.listen(8080, (error) => {
    if (error) {
        console.log("出现错误")
    } else {
        console.log("启动成功")
    }
});
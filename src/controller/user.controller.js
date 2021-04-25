const userService = require('../service/user.service');
class UserController {
    async create(ctx,next){
        // 获取用户携带参数
        const user = ctx.request.body;
        // 查询数据

        const result = await userService.create(user);
  
          // 返回数据
        ctx.body = result;
    }
}
module.exports = new UserController();
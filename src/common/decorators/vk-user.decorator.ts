import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { VkUser } from "../guards/vk-user.guard";

export const VkUserParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.vkUser as VkUser;
  }
);

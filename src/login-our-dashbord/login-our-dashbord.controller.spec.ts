import { Test, TestingModule } from '@nestjs/testing';
import { LoginOurDashbordController } from './login-our-dashbord.controller';
import { LoginOurDashbordService } from './login-our-dashbord.service';

describe('LoginOurDashbordController', () => {
  let controller: LoginOurDashbordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginOurDashbordController],
      providers: [LoginOurDashbordService],
    }).compile();

    controller = module.get<LoginOurDashbordController>(LoginOurDashbordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

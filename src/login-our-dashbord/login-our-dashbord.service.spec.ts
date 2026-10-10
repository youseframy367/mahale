import { Test, TestingModule } from '@nestjs/testing';
import { LoginOurDashbordService } from './login-our-dashbord.service';

describe('LoginOurDashbordService', () => {
  let service: LoginOurDashbordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginOurDashbordService],
    }).compile();

    service = module.get<LoginOurDashbordService>(LoginOurDashbordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

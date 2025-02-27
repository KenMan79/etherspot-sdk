import { IsBoolean, IsPositive, IsOptional } from 'class-validator';
import { IsAddress } from './validators';
export class GetCrossChainBridgeRouteDto {
  @IsAddress()
  fromTokenAddress: string;

  @IsPositive()
  fromChainId?: number;

  @IsAddress()
  toTokenAddress: string;

  @IsPositive()
  toChainId?: number;

  fromAmount: string;

  @IsAddress()
  userAddress: string;

  @IsOptional()
  @IsBoolean()
  disableSwapping: boolean;
}

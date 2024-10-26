import { IMQTTConnection } from '@mqtt/IMQTTConnection';
import { IController } from 'Common/IController';
import { buildCommandButton } from 'Common/buildCommandButton';
import { Commands } from './Commands';

export const setupMovementButtons = (mqtt: IMQTTConnection, controller: IController<number[]>) => {
  buildCommandButton('Linak', mqtt, controller, 'LinakAllDown', Commands.AllDown);
  buildCommandButton('Linak', mqtt, controller, 'LinakAllUp', Commands.AllUp);
  buildCommandButton('Linak', mqtt, controller, 'LinakStopMovement', Commands.StopMovement);

  buildCommandButton('Linak', mqtt, controller, 'LinakFootDown', Commands.FootDown);
  buildCommandButton('Linak', mqtt, controller, 'LinakFootUp', Commands.FootUp);

  buildCommandButton('Linak', mqtt, controller, 'LinakHeadDown', Commands.HeadDown);
  buildCommandButton('Linak', mqtt, controller, 'LinakHeadUp', Commands.HeadUp);

};

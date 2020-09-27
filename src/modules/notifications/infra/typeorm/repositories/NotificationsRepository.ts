import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRespository';
import { getMongoRepository, MongoRepository } from 'typeorm';
import Notification from '../schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private ormRespository: MongoRepository<Notification>;

  constructor() {
    this.ormRespository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRespository.create({
      content,
      recipient_id,
    });
    this.ormRespository.save(notification);
    return notification;
  }
}

export default NotificationsRepository;

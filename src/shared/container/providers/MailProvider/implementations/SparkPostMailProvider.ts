import SparkPost from 'sparkpost';
import { inject, injectable } from 'tsyringe';
import mailConfig from '@config/mail';
import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

@injectable()
export default class SparkPostMailProvider implements IMailProvider {
  private client: SparkPost;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = new SparkPost(process.env.SPARKPOST_API_KEY);
  }

  public async sendMail({
    to,
    subject,
    from,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;
    await this.client.transmissions.send({
      content: {
        from: {
          name: from?.name || name,
          email: from?.email || email,
        },
        subject,
        html: await this.mailTemplateProvider.parse(templateData),
      },
      recipients: [{ address: { name: to.name, email: to.email } }],
    });
  }
}

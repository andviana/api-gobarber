import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const listProviders = container.resolve(ListProvidersService);
    const providers = await listProviders.execute({ user_id });

    return response.json(providers);
  }
}
export default ProvidersController;

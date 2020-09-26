import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;
    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );
    const availability = await listProviderDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });
    console.log(availability);
    return response.json(availability);
  }
}
export default ProviderDayAvailabilityController;

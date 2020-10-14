import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import { Response, Request } from 'express';
import { container } from 'tsyringe';

class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;
    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );
    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });
    return response.json(availability);
  }
}
export default ProviderMonthAvailabilityController;

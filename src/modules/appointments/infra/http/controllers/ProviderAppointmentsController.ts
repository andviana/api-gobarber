import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.query;
    const listProviderAppointmentsService = container.resolve(
      ListProviderAppointmentsService,
    );
    const appointments = listProviderAppointmentsService.execute({
      day: Number(day),
      month: Number(month),
      year: Number(year),
      provider_id,
    });
    return response.json(classToClass(appointments));
  }
}
export default ProviderAppointmentsController;

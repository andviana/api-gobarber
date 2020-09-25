import { de } from 'date-fns/locale';

export default interface ICreateAppointmentDTO {
  provider_id: string;
  user_id: string;
  date: Date;
}

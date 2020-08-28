// src/routes/indes.ts
import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();
routes.use('/appointments', appointmentRouter);

// routes.post('/users', (request, response) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };
//   return response.json(user);
// });

export default routes;

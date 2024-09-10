import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { DriverParams } from '../models/driver-model';
import { drivers } from '../repositories/drivers-repository';
import { Routes } from '../routes/routes';
import { StatusCode } from '../../utils/status-code';


// Implementar rotas para Drivers

export async function routesDriver(server: FastifyInstance) {
    server.get<{ Params: DriverParams }>(Routes.DRIVER, async (request: FastifyRequest<{ Params: DriverParams }>, response: FastifyReply) => {

    response.type("application/json").code(StatusCode.OK);
    return {drivers};
    });
}
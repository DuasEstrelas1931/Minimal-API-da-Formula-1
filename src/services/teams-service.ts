import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { DriverParams } from '../models/driver-model';
import { Routes } from '../routes/routes';
import { teams } from '../repositories/teams-repository';
import { StatusCode } from '../../utils/status-code';

// Implementar rotas para Drivers

export async function routesTeam(server: FastifyInstance) {
    server.get<{ Params: DriverParams }>(Routes.TEAMS, async (request: FastifyRequest<{ Params: DriverParams }>, response: FastifyReply) => {

    response.type("application/json").code(StatusCode.OK);
    return {teams};
    });
}
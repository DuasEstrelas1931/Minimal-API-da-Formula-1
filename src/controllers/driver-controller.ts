import { FastifyInstance, //FastifyInstance: Tipagem para a instância do servidor Fastify.
    FastifyReply, //FastifyRequest: Tipagem para o objeto de requisição (dados que vêm do cliente).
    FastifyRequest  //FastifyReply: Tipagem para o objeto de resposta (dados que são enviados de volta ao cliente).
} from 'fastify';
import { DriverParams } from '../models/driver-model';
import { drivers } from '../repositories/drivers-repository';
import { Routes } from '../routes/routes';
import { StatusCode } from '../../utils/status-code';



export async function driverController(server: FastifyInstance) {
    server.get<{ Params: DriverParams }>(Routes.DRIVER_ID, async (request: FastifyRequest<{ Params: DriverParams }>, response: FastifyReply) => {
        const id  = request.params.id;
        const driver = drivers.find(d => d.id.toString() === id);

        if (!driver) {
            response.type('application/json').code(StatusCode.NOT_FOUND);
            return { message: 'Driver Not Found' };
        } else {
            response.type('application/json').code(StatusCode.OK);
            return driver;
        }
    });
}



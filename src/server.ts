import fastify from "fastify";
import cors from "@fastify/cors"
import { driverController } from "./controllers/driver-controller";
import { routesTeam } from "./services/teams-service";
import { routesDriver } from "./services/drivers-service";
import { teamController } from "./controllers/team-controller";


const server = fastify({logger: true,  });

// Registrando o CORS com as opções padrão (ou configure conforme necessário)
server.register(cors, { 
    origin: '*' // Permite todas as origens, mas pode ser personalizado
});

// Registrando as rotas
server.register(teamController);
server.register(driverController);
server.register(routesDriver, routesTeam);


server.listen({port: 3000}, () => {
    console.log(`Server is now listening `)
});
  

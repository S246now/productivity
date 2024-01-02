// Importa el método handleAuth desde el SDK
import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();

/* // Exporta el resultado de llamar a handleAuth en el handler GET
export default handleAuth().get(async (req, res) => {
  // Tu código específico para la ruta de login aquí
  res.status(200).json({ message: 'Login endpoint' });
});
 */
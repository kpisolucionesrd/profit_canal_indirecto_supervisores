import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './componentes/Home.js';
import MenuSupervisor from './componentes/Menu_Supervisores.js';
import Encuesta from './componentes/Encuesta.js';
import MenuCamara from './componentes/MenuCamara.js';
import CamaraTaker from './componentes/CamaraTaker.js';
import EncuestaPrecios from './componentes/EncuestaFormPrecios.js';
import Estadisticas from './componentes/Estadisticas.js';
import EnviarDatos from './componentes/EnviarDatosServidor.js';


const App = createStackNavigator(
  {
    Home: Home,
    MenuSupervisor:MenuSupervisor,
    Encuesta:Encuesta,
    MenuCamara:MenuCamara,
    CamaraTaker:CamaraTaker,
    EncuestaPrecios:EncuestaPrecios,
    Estadisticas:Estadisticas,
    EnviarDatos:EnviarDatos
  },
  {
    initialRouteName:"Home"
  }
);

export default createAppContainer(App);

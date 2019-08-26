import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,ScrollView,TextInput,KeyboardAvoidingView,Alert,AsyncStorage,Picker} from 'react-native';
import RadioBottom from './ElementosCompactos/radioBottom.js';
import ComboBox from './ElementosCompactos/ComboBox.js';
import TextInputComponent from './ElementosCompactos/textInput.js';
import TextBoxInputCustomNumber from './ElementosCompactos/TextBoxCustom_number';
import {Icon,Button} from 'react-native-elements';

//const URL="http://167.71.9.11:5000/api/";
const URL="http://localhost:80/api/";


const datosCampos={
  "estadoColmado": [
      "Dar Mantenimiento",
      "Ventana Nueva",
      "Colmado Quebrado",
      "Colmado no encontrado",
      "Ventana Quitada",
      "***SELECCIONAR***"
  ],
  "dispColmaderoSiNo": [
      "Dejo pasar",
      "Permite material POP",
      "Permite materiales con precios"
  ],
  "dispColmadero": [
      "Muy Dispuesto",
      "Dispuesto",
      "No Dispuesto",
      "***SELECCIONAR***"
  ],
  "tipoAccesoColmado": [
      "Calle Principal",
      "Calle Secundaria",
      "Escondido",
      "***SELECCIONAR***"
  ],
  "tamanoColmado": [
      "Pequeño",
      "Mediano",
      "Grande",
      "***SELECCIONAR***"
  ],
  "capacidadColmadoSiNo": [
      "Dos o mas Refrigeradores",
      "Vitrina"
  ],
  "tipoVentana": [
      "Vitrina",
      "Tramo",
      "***SELECCIONAR***"
  ],
  "iniciativasVisibilidad": [
      "Ristra Tiple Acción",
      "Ristra jabon Protex",
      "Ristra crema y cepillos",
      "Ristra cepillos",
      "Ristra desodorantes",
      "Afiche desodorante",
      "Afiche Suavitel Complete",
      "Afiche cepillo BM",
      "Afiche Kids 50ml",
      "Afiche Protex 75gr",
      "Afiche Fabuloso Doypack",
      "Afiche Fabuloso Cloro",
      "Sari Sari Colgate",
      "Mini Sari Sarito",
      "Colgante desodorante",
      "Colgante Fabuloso cloro",
      "Colgante Fabuloso Sachet",
      "Colgante Triple Acción 22ml",
      "Sachetera triple",
      "Bandeja Desodorante 1 nivel",
      "Bandeja Desodorante 2 niveles",
      "Troquelado Kids",
      "Copete en los dulces Kids",
      "Dispensador Suavitel Aroma Intense",
      "Hablador Fabuloso Doypack",
      "Drawer (gavetero)",
      "Cintas sin fin (brandeado colgate)",
      "Counter Cover Colgate",
      "Stickers de Mostrador Apple and Berries",
      "Stickers Categoria de Colmado"
  ],
  "surtidoColmado": [
      "Menta 22ml",
      "Menta 50ml",
      "Menta 100ml",
      "Triple Accion 22ml",
      "Triple Accion 50 ml",
      "Triple Accion 100 ml",
      "Kids 50ml",
      "TB Premier Clean",
      "TB classic",
      "Protex 75gr",
      "Protex 110gr",
      "Lavador Miel 90gr",
      "Palmolive 110gr",
      "SS Roll On",
      "LSS Roll On",
      "Fabuloso sachet 80 ML",
      "Fabuloso Doypack 200ml",
      "Fabuloso cloro",
      "Suavitel Sachet 85ml",
      "Suavitel 225ml"
  ],
  "actividadCompetitiva": [
      "Afiche Brillante 150ml",
      "Afiche Desifectante YA",
      "Afiche Cepillos Oral B",
      "Colgantes O Afiches Oral B",
      "Counter Cover Doña Gallina",
      "Mini Exhibidor Oral B",
      "Ristras OB",
      "Ristras Downy",
      "Ristra jabon y desodorante Rexona",
      "Sari Sari PG",
      "Sari Sari Unilever",
      "Sachetera Mistolin"
  ],
  "cuidadoOral": [
      "Menta 22ML",
      "Menta 50ML",
      "Menta 100ML",
      "Triple Accion 22ML",
      "Triple Accion 50ML",
      "Triple Accion 100ML",
      "Total 50ML",
      "Total 100ML",
      "Kids 50ML",
      "Cepillo Colgate Classic Adulto",
      "Cepillo Colgate Premier Clean",
      "Kit Del Cepillado (Classic y Premier)",
      "Oral B Complete 50ML",
      "Oral B 123 50ML",
      "TB Matrix Adulto",
      "TB OralB 123",
      "TB Chinos variados"
  ],
  "cuidadoPersonal": [
      "Palmolive 110GR",
      "Protex 75GR",
      "Protex 110GR",
      "Lavador Miel 90GR",
      "Speed Stick Roll ON 50 GR",
      "Lady Speed Stick Roll on 50GR",
      "Kinder Miel 90GR",
      "Camary 120GR",
      "Hispano Miel Personal 70GR",
      "Hispano Miel Personal 125GR",
      "Jabon Rexona 125GR",
      "Avon Roll On 75ML",
      "Rexona 50ML"
  ],
  "cuidadoHogar": [
      "Fabuloso 80 mL",
      "Mistolin 60 mL",
      "Ten 60 mL",
      "Macier 85mL-A",
      "Fabuloso 200mL",
      "Mistolin 220 mL",
      "Boe 5/5 140ml",
      "Ten 220mL-A",
      "Yá! 150 mL",
      "Yá! 420 mL",
      "Fabuloso 450 mL",
      "Mistolin 410 mL",
      "Ten 410ML",
      "Macier 100 mL",
      "Brillante 150mL",
      "Ten Liquid 85mL",
      "El Mago 150mL",
      "Suavitel 450mL /485mL",
      "Downy Rinse Free 360mL ",
      "Macier 500 mL ",
      "Macier 250 mL",
      "Ten 220mL",
      "Suavitel 225mL",
      "Suavitel BB 85mL",
      "Downy Rinse Free 85mL",
      "BOE 5/5 120mL",
      "Ten 40mL",
      "Ten 85mL",
      "Ten 110mL",
      "Macier 85mL",
      "Ensueño 80mL",
      "Axion Liquid 200ml",
      "Ten Liquid 220mL",
      "Macier Liquid 200mL"
  ],
  "_id": "5d5eac603b8c8941946af666",
  "identificador": 205,
  "nombre": "Marcial",
  "apellido": "Sepulveda",
  "password": "profit12",
  "zona": "Santo Domingo",
  "supervisor": "EDWIN SANZ",
  "cantCampos": 76,
  "cantCamposForm": 65,
  "es_supervisor": "no",
  "__v": 0
}


export default class Encuesta extends Component{
  constructor(props){
    super(props);
    this.state={
      default:"**Seleccionar**",
      disableButton:false,
      colmado:"***SELECCIONAR***",
      objetoDatos:{
        id:null,
        encuesta:{},
        fechaInserccion:null
      },
      objetoEncuesta:{}
    };
    //Funciones
  };

  static navigationOptions = {
    title: 'Encuesta Supervisores',
  };

  //Eventos
  crearJson=async(idCampo,nuevo_resultado)=>{
    //Proceso para crear el JSON con los datos de la encuesta
    const { navigation } = this.props;
    const datosUsuario=navigation.getParam('datosUsuario','some default value');

    let objetoDatos=this.state.objetoEncuesta; //Obtener el Json del constructor
    objetoDatos[idCampo]=nuevo_resultado

    //Guardar data en el state
    this.setState({
      objetoEncuesta:objetoDatos,
    })
  };

  cargarDataLocal=async()=>{
    const { navigation } = this.props;
    const datosUsuarios=navigation.getParam('datosUsuarios','some default value');

    let objetoDatos=await this.state.objetoDatos;
    objetoDatos.id=datosUsuarios.identificador;
    objetoDatos.encuesta=this.state.objetoEncuesta;
    objetoDatos.tipoEncuesta="EncuestaSupervisores";

    alert(await JSON.stringify(objetoDatos));

    //Guardar el objeto datos en el statte
    this.setState({
      objetoDatos:objetoDatos
    });

    //Verificar si los campos fueron completados
    if(Object.keys(this.state.objetoEncuesta).length>=datosUsuarios.cantCampos && objetoDatos.encuesta["colmado"]!="***SELECCIONAR***"){

      //Ir al MenuCamara
      this.props.navigation.navigate('MenuCamara',{
        datosUsuarios:datosUsuarios,
        datosEncuesta:objetoDatos,
        colmadoOnGoing:this.state.colmado
      });

    }else{
      if(objetoDatos.encuesta["colmado"].toLowerCase()=="***seleccionar***" || objetoDatos.encuesta["colmado"]==null){
        alert("Favor seleccionar colmado")
      }else{
        alert("Faltan campos por completar")
      }
    }

  };

  gettingComboBox=async(valorSeleccionado)=>{

    //Obtener el Json del constructor
    let objetoDatos=this.state.objetoEncuesta;
    objetoDatos["colmado"]=valorSeleccionado

    /*Guardar objeto*/
    this.setState({
      objetoEncuesta:objetoDatos,
      colmado:valorSeleccionado
    });
  };

  //Cadenas de Eventos
  render(){
    const { navigation } = this.props;
    const colmados=navigation.getParam('colmados','some default value');
    const datosUsuarios=navigation.getParam('datosUsuarios','some default value');
    return(
      <ScrollView style={iniciar_seccion_styles.main}>

        {/*Label Seleccionar Colmado*/}
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Favor Seleccionar Colmado</Text>
        <Picker onValueChange={this.gettingComboBox} selectedValue={this.state.colmado} style={{backgroundColor:'white',width:'100%',marginBottom:30}}>
          {colmados.map((campo)=><Picker.Item label={campo} value={campo} />)}
        </Picker>

        {/*Estados de los Colmados*/}
        <Text style={iniciar_seccion_styles.secciones}>ESTADO DEL COLMADO</Text>
        <ComboBox identificacion="Estado del colmado" datos={datosCampos.estadoColmado} funcion={this.crearJson} default="***SELECCIONAR***"/>

        {/*Disosicion del Colmadero*/}
        <Text style={iniciar_seccion_styles.secciones}>DISPOSICION DEL COLMADERO</Text>
        {datosCampos.dispColmaderoSiNo.map((campo)=><RadioBottom identificacion={campo} funcion={this.crearJson}/>)}

        <ComboBox identificacion="Disposicion Colmadero" datos={datosCampos.dispColmadero} funcion={this.crearJson} default="***SELECCIONAR***"/>

        {/*Tipo de Acceso al Colmado*/}
        <Text style={iniciar_seccion_styles.secciones}>TIPO DE ACCESO AL COLMADO</Text>

        <ComboBox identificacion="Acceso Colmado" datos={datosCampos.tipoAccesoColmado} funcion={this.crearJson} default="***SELECCIONAR***"/>

        {/*Tamaño del Colmado*/}
        <Text style={iniciar_seccion_styles.secciones}>TAMAñO DEL COLMADO</Text>

        <ComboBox identificacion="Tamano Colmado" datos={datosCampos.tamanoColmado} funcion={this.crearJson} default="***SELECCIONAR***"/>

        {/*Capacidad del Colmado*/}
        <Text style={iniciar_seccion_styles.secciones}>CAPACIDAD DEL COLMADO</Text>
        {datosCampos.capacidadColmadoSiNo.map((campo)=><RadioBottom identificacion={campo} funcion={this.crearJson}/>)}

        <TextBoxInputCustomNumber identificacion="Cantidad de Deliverys" funcion={this.crearJson} default={0}/>

        {/*Tipo Ventana*/}
        <Text style={iniciar_seccion_styles.secciones}>TIPO VENTANA</Text>
        <ComboBox identificacion="Tipo Ventana" datos={datosCampos.tipoVentana} funcion={this.crearJson} default="***SELECCIONAR***"/>

        <TextBoxInputCustomNumber identificacion="Cantidad Tramos Ventana" funcion={this.crearJson} default={0}/>

        {/*Iniciativas de Visibilidad*/}
        <Text style={iniciar_seccion_styles.secciones}>INICIATIVAS DE VISIBILIDAD</Text>
        {datosCampos.iniciativasVisibilidad.map((campo)=><RadioBottom identificacion={campo} funcion={this.crearJson}/>)}

        {/*Surtido Colmado*/}
        <Text style={iniciar_seccion_styles.secciones}>SURTIDO COLMADO</Text>
        {datosCampos.surtidoColmado.map((campo)=><RadioBottom identificacion={campo} funcion={this.crearJson}/>)}

        {/*Actividad Competitiva*/}
        <Text style={iniciar_seccion_styles.secciones}>ACTIVIDAD COMPETITIVA</Text>
        {datosCampos.actividadCompetitiva.map((campo)=><RadioBottom identificacion={campo} funcion={this.crearJson} value={campo}/>)}

        {/*COMENTARIOS*/}
        <TextInputComponent identificacion="Comentarios" funcion={this.crearJson} default="***SELECCIONAR***"/>

        <Icon disabled={this.state.disableButton} name='done' type='materiallcons' color='white' iconStyle={{marginLeft:300}} size={40} onPress={this.cargarDataLocal}/>
        {this.state.disableButton ? null:<Text style={{marginLeft:300,color:'white',fontSize:15,marginBottom:15}} onPress={this.cargarDataLocal}>Listo</Text>}
      </ScrollView>
    )
  } //Cierre del metodo render

} //Cierre de la clase

const iniciar_seccion_styles=StyleSheet.create({
  main:{
    backgroundColor:'red',
    height:'100%',
    padding:6
  },
  secciones:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'darkblue',
    width:'100%',
    textAlign:'center'
  }
})

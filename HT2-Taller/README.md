# HT2Taller

app.routes: Se encarga de mapear las rutas del proyecto.

Primer path encargado de la raiz o ruta por defecto.

Segundo path encargado de la vista principal siendo inicio.

Tercer path encargado de la vista del registro de un nuevo medicamento.

Cuarto path encagrado de error de escritura en URL's dando por defecto la vista de inicio para evitar pantallas en blanco o errores.

Services:

medicamentos.service: Se encarga de mantener la base de memoria de los datos y gestiona el flujo de informacion entre los componentes.

@Injectable: Se encarga de generar una sola instancia manteniendo la memoria de los registros ingresados.

listarMedicamentos: es el array encargado de almacenar los registros.

obtenerMedicamentos: es el encargado de la consulta/leectura de los datos que estan almacenados en el array.

guardarMedicamento: es el encargado de de la escritura/registro de un nuevo medicamento.

obtenerMedicamentos: 

Components:

agregar-medicamentos: Se realizan los registro de nuevos medicamentos. Utilizando metodos como: 

ngOnInit: que se inicializa con medicamentosForm para realizar la estructura del formulario verificando que todas las especificaciones para ciertos campos sean cumplidas. 
noValido: para mostrar mensajes de problemas que ocurrienron al intentar almacenar el registro. 
onSubmit: que se ejecuta cuando se realiza el clik sobre el boton de guardar el registro con los campos llenos anteriormente dando un mensaje de guardado con exito o si humo un problema al guardar.

inicio: Se utiliza para la visualizacion de la tabla que almacena los registros de medicamentos. 
Utiliza un array de Medicamentos para almacenar los valores ingresados.

ngOnInit: se encarga de realizar el llamado a cargarMedicamentos() siendo este el que realiza el ordenamiento de los registros sin que el usuario tenga la necesidad de tocar algun boton. 

cargarMedicamentos: se encarga de la peticion de los datos que se mostraran el la tabla. Si no detecta registros realizados y sin errores mostrara un mensaje de valores vacios. Si ocurrio algun error realizara el mensaje sobre esto.
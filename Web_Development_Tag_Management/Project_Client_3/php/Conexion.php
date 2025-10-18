<?php
class Conexion
{
    private $conn;		// para guardar la referencia de la conexión
 
    public function __construct( )
    {    
    	$archivo = 'config.ini';
    	// abre archivo config.ini
        try 
        {
            $ajustes = parse_ini_file( $archivo, true );
            if( !$ajustes )
            	throw new Exception( 'No se pude abrir el archivo ' . $archivo . '.' );
        } catch( PDOException $e){
		echo 'Error en la conexión: ' . $e->getMessage() . '.';
	    }

    	// carga los datos del archivo config.ini
    	$controlador = $ajustes["database"]["driver"];
    	$servidor = $ajustes["database"]["host"];
    	$basedatos = $ajustes["database"]["dbname"];
    	$puerto = $ajustes["database"]["port"];
    	$usuario = $ajustes["database"]["user"];
    	$password = $ajustes["database"]["pass"];

        // realiza la conexión a la base de datos
	    try {
            $this->conn = new PDO (
                $controlador.":host=".$servidor.";port=".$puerto.";dbname=".$basedatos.";charset=utf8", $usuario, $password );            
		    $this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION ); // habilita excepciones
    	} catch ( PDOException $e ) {
            echo 'Error en la conexión: ' . $e->getMessage() . '.';
    	}		
    } // fin del constructor

    // Ejecuta cualquier tipo de consulta: Select, Insert, Update o Delete
    public function consultar( $consulta, $valores = array(), $percent = ' ' )
    {
        $resultado = false;

    	if( $stmt = $this->conn->prepare( $consulta ))
    	{
            if( preg_match_all("/(:\w+)/", $consulta, $campo, PREG_PATTERN_ORDER ))
            {
                $campo = array_pop( $campo ); // insertar en un arreglo
                
                foreach( $campo as $parametro )
                {
                    if( $percent != ' ')
                    {
                        if( is_string( $valores[ substr($parametro, 1 ) ] ) )
                        {
                            $valor = "%".$valores[ substr( $parametro, 1 ) ]."%";                      
                            $stmt->bindParam( $parametro, $valor, PDO::PARAM_STR );
                        } else{
                            $stmt->bindValue( $parametro, $valores[ substr( $parametro, 1 ) ], PDO::PARAM_INT );
                        }
                    } else {

                        if( is_string( $valores[ substr( $parametro, 1 ) ] ) )
                        {                            
                            $stmt->bindValue( $parametro, $valores[ substr( $parametro, 1 ) ], PDO::PARAM_STR );
                        } else {                            
                            $stmt->bindValue( $parametro, $valores[ substr( $parametro, 1 ) ], PDO::PARAM_INT );
                        }
                        
                    }
                }
            }

    	    try {				
                $stmt->execute(); // ejecuta la consulta				
                $resultado = $stmt->fetchAll( PDO::FETCH_ASSOC ); // si se ejecuta la consulta, 
                $stmt->closeCursor();
    	    } catch (Exception $e) {
                echo 'Error de ejecución: ' . $e->getMessage() . '.';
    		}
        } // fin de if

	    return $resultado;
    } // fin de la función consultar

    // Cierra la conexión a la base de datos
    public function __destructor()
    {		
        if( !$this->conn )
            $this->conn = null;	
    } // fin del destructor
} // fin de la clase Conexion

?>
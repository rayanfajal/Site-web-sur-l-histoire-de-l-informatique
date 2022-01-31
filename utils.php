<?php

// Echo une URL absolue à partir d'un chemin donné
function uri( string $path):void
{
    echo APP_ROOT . $path;
}

// Chargement d'une view
function loadView(string $name, array $data): void
{
    // Transforme les clés de $ data en variable accessibles à la view
    extract($data);

    // Chargement de la view demandée
    require_once 'header.php';
    require_once  $name . '.php';
    require_once 'footer.php';

}


?>

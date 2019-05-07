<?php
    require "./producto.php";
    require "./container.php";

    $miC = new Container("chico");
    $miP = new Producto(1, "Lapiz", "Bic", "Argentina", 20);

    $miC->mostrar();
    echo "<br>";
    $miP->mostrar();

    $miC->agergarProducto($miP);
?>

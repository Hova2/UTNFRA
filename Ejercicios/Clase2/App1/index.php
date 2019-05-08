<?php
    require "./producto.php";
    require "./container.php";

    $miC = new Container("chico");
    $miP1 = new Producto(1, "Lapiz", "Bic", "Argentina", 500);
    $miP2 = new Producto(2, "Marcador", "Bic", "Argentina", 400);
    $miP3 = new Producto(1, "Lapiz", "Bic", "Argentina", 100);
    $miP4 = new Producto(2, "Marcador", "Bic", "Argentina", 1);

    $miC->mostrar();
    echo "<br>";
    $miP1->mostrar();
    echo "<br>";
    $miP2->mostrar();
    echo "<br>";
    $miP3->mostrar();

    $miC->agregarProducto($miP1);
    $miC->agregarProducto($miP2);
    $miC->agregarProducto($miP3);
    $miC->agregarProducto($miP4);

    echo "<br>";

    $miC->mostrarProductos();
?>

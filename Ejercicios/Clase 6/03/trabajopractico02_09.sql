-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2019 a las 21:39:34
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajopractico02/09`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cod_cliente` int(50) NOT NULL,
  `cod_lista` int(50) NOT NULL,
  `razon_social` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cod_cliente`, `cod_lista`, `razon_social`) VALUES
(1, 2, 'razon_social1'),
(2, 1, 'razon_social2'),
(3, 3, 'razon_social3'),
(4, 5, 'razon_social4'),
(5, 4, 'razon_social5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_contratos`
--

CREATE TABLE `datos_contratos` (
  `cod_empleado` int(50) NOT NULL,
  `fecha_contrato` date NOT NULL,
  `cuota` int(50) NOT NULL,
  `ventas` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `datos_contratos`
--

INSERT INTO `datos_contratos` (`cod_empleado`, `fecha_contrato`, `cuota`, `ventas`) VALUES
(1, '2001-10-10', 40000, 10000),
(3, '2002-05-05', 170000, 150000),
(5, '2001-10-10', 200000, 170000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedidos`
--

CREATE TABLE `detalle_pedidos` (
  `cod_pedido` int(50) NOT NULL,
  `numero_linea` int(50) NOT NULL,
  `cod_producto` int(50) NOT NULL,
  `cantidad` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `detalle_pedidos`
--

INSERT INTO `detalle_pedidos` (`cod_pedido`, `numero_linea`, `cod_producto`, `cantidad`) VALUES
(1, 1, 2, 200),
(1, 2, 1, 300),
(2, 1, 3, 100),
(3, 1, 4, 450),
(3, 2, 5, 500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `cod_documento` int(50) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`cod_documento`, `descripcion`) VALUES
(1, 'documento'),
(2, 'licencia de conducir'),
(3, 'numero de socio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `cod_empleado` int(50) NOT NULL,
  `apellido` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `num_doc` int(50) NOT NULL,
  `cod_jefe` int(50) NOT NULL,
  `cod_oficina` int(50) NOT NULL,
  `cod_documento` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`cod_empleado`, `apellido`, `nombre`, `fecha_nacimiento`, `num_doc`, `cod_jefe`, `cod_oficina`, `cod_documento`) VALUES
(1, 'fernandez', 'juan', '2019-09-09', 123456789, 0, 1, 1),
(2, 'diaz', 'jose', '2019-06-04', 123456788, 1, 1, 1),
(3, 'perez', 'maria', '2018-10-09', 123456787, 0, 2, 2),
(4, 'gomez', 'luisa', '2017-07-03', 123456786, 3, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fabricantes`
--

CREATE TABLE `fabricantes` (
  `cod_fabricante` int(50) NOT NULL,
  `razon_social` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `fabricantes`
--

INSERT INTO `fabricantes` (`cod_fabricante`, `razon_social`) VALUES
(1, 'don satur'),
(2, 'bagley'),
(3, 'nobleza picardo'),
(4, 'arcor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listas`
--

CREATE TABLE `listas` (
  `cod_lista` int(50) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `ganancia` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `listas`
--

INSERT INTO `listas` (`cod_lista`, `descripcion`, `ganancia`) VALUES
(1, 'descripcionLista1', 20),
(2, 'descripcionLista2', 80),
(3, 'descripcionLista3', 60),
(4, 'descripcionLista4', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficinas`
--

CREATE TABLE `oficinas` (
  `cod_oficina` int(50) NOT NULL,
  `codigo_director` int(50) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `oficinas`
--

INSERT INTO `oficinas` (`cod_oficina`, `codigo_director`, `descripcion`) VALUES
(1, 1, 'legales'),
(2, 3, 'rrhh');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `cod_pedido` int(50) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `cod_empleado` int(50) NOT NULL,
  `cod_cliente` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`cod_pedido`, `fecha_pedido`, `cod_empleado`, `cod_cliente`) VALUES
(1, '2001-10-25', 2, 3),
(2, '2002-11-20', 1, 1),
(3, '2003-12-10', 3, 2),
(4, '2004-09-15', 4, 4),
(5, '2005-08-05', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios`
--

CREATE TABLE `precios` (
  `cod_producto` int(50) NOT NULL,
  `cod_lista` int(50) NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `precios`
--

INSERT INTO `precios` (`cod_producto`, `cod_lista`, `precio`) VALUES
(1, 2, 100),
(2, 2, 100),
(2, 1, 100),
(1, 3, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `cod_producto` int(50) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `precio_costo` int(50) NOT NULL,
  `cantidad_stock` int(50) NOT NULL,
  `punto_reposicion` int(50) NOT NULL,
  `cod_fabricante` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`cod_producto`, `descripcion`, `precio_costo`, `cantidad_stock`, `punto_reposicion`, `cod_fabricante`) VALUES
(1, 'galletitas', 10, 1000, 500, 1),
(2, 'bizcochos', 90, 870, 30, 2),
(3, 'cigarrillos', 80, 6000, 250, 3),
(4, 'chupetines', 10, 2000, 600, 4),
(5, 'chicles', 2, 2000, 300, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cod_cliente`),
  ADD KEY `FK_lista_cliente` (`cod_lista`);

--
-- Indices de la tabla `datos_contratos`
--
ALTER TABLE `datos_contratos`
  ADD KEY `FK_empleadodatoscontratos` (`cod_empleado`);

--
-- Indices de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD KEY `FK_productodetallepedidos` (`cod_producto`),
  ADD KEY `FK_detallePedidos_pedidos` (`cod_pedido`) USING BTREE;

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`cod_documento`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`cod_empleado`),
  ADD KEY `FK_documentosempleados` (`cod_documento`) USING BTREE,
  ADD KEY `FK_oficinasempleados` (`cod_oficina`),
  ADD KEY `FK_jefeempleados` (`cod_jefe`);

--
-- Indices de la tabla `fabricantes`
--
ALTER TABLE `fabricantes`
  ADD PRIMARY KEY (`cod_fabricante`);

--
-- Indices de la tabla `listas`
--
ALTER TABLE `listas`
  ADD PRIMARY KEY (`cod_lista`);

--
-- Indices de la tabla `oficinas`
--
ALTER TABLE `oficinas`
  ADD PRIMARY KEY (`cod_oficina`),
  ADD KEY `FK_empleadooficinas` (`codigo_director`) USING BTREE;

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`cod_pedido`),
  ADD KEY `FK_empleadopedidos` (`cod_empleado`),
  ADD KEY `FK_clientepedidos` (`cod_cliente`);

--
-- Indices de la tabla `precios`
--
ALTER TABLE `precios`
  ADD KEY `FK_productoprecio` (`cod_producto`),
  ADD KEY `FK_listasprecios` (`cod_lista`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`cod_producto`),
  ADD KEY `FK_fabricanteproductos` (`cod_fabricante`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cod_cliente` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  MODIFY `cod_pedido` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `documentos`
--
ALTER TABLE `documentos`
  MODIFY `cod_documento` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `cod_empleado` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `fabricantes`
--
ALTER TABLE `fabricantes`
  MODIFY `cod_fabricante` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `listas`
--
ALTER TABLE `listas`
  MODIFY `cod_lista` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `oficinas`
--
ALTER TABLE `oficinas`
  MODIFY `cod_oficina` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `cod_pedido` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `cod_producto` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

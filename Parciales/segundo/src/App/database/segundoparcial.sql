-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2019 a las 00:44:46
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `segundoparcial`
--
CREATE DATABASE IF NOT EXISTS `segundoparcial` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `segundoparcial`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `metodo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `ruta` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `hora` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `logs`
--

INSERT INTO `logs` (`usuario`, `metodo`, `ruta`, `hora`, `created_at`, `updated_at`) VALUES
('admin', 'POST', 'Usuarios/alta', '00:00:00', '2019-07-28 04:22:42', '2019-07-28 04:22:42'),
('admin', 'POST', 'Usuarios/alta', '00:00:00', '2019-07-28 04:25:20', '2019-07-28 04:25:20'),
('admin', 'POST', 'Usuarios/alta', '01:27:35', '2019-07-28 04:27:35', '2019-07-28 04:27:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `sexo` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `clave`, `sexo`, `perfil`, `created_at`, `updated_at`) VALUES
(3, 'admin', 'admin', 'femenino', 'admin', '2019-07-27 17:13:01', '0000-00-00 00:00:00'),
(4, 'pibes', '123456', 'masculino', 'usuario', '2019-07-27 22:17:03', '2019-07-27 22:17:03'),
(5, 'pibestoken', '123456', 'masculino', 'usuario', '2019-07-28 00:22:50', '2019-07-28 00:22:50'),
(6, 'pibeslog', '123456', 'masculino', 'usuario', '2019-07-28 04:22:42', '2019-07-28 04:22:42'),
(7, 'pibeslog2', '123456', 'masculino', 'usuario', '2019-07-28 04:25:20', '2019-07-28 04:25:20'),
(8, 'pibeslog2', '123456', 'masculino', 'usuario', '2019-07-28 04:27:35', '2019-07-28 04:27:35');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-07-2019 a las 08:52:58
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
-- Estructura de tabla para la tabla `compras`
--

DROP TABLE IF EXISTS `compras`;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `articulo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `precio` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `articulo`, `fecha`, `precio`, `created_at`, `updated_at`) VALUES
(1, 'chocolate', '2019-07-30 01:58:08', 25, '2019-07-30 06:58:08', '2019-07-30 06:58:08'),
(2, 'chocolate2', '2019-07-30 01:58:35', 25.5, '2019-07-30 06:58:35', '2019-07-30 06:58:35'),
(3, 'chocolate3', '2019-07-30 02:14:58', 20.55, '2019-07-30 07:14:58', '2019-07-30 07:14:58'),
(4, 'chocolate3', '2019-07-30 02:16:02', 20.55, '2019-07-30 07:16:02', '2019-07-30 07:16:02'),
(5, 'chocolate4', '2019-07-30 02:18:05', 15.52, '2019-07-30 07:18:05', '2019-07-30 07:18:05'),
(6, 'chocolate5', '2019-07-30 02:18:48', 10.52, '2019-07-30 07:18:48', '2019-07-30 07:18:48'),
(7, 'chocolate6', '2019-07-30 02:38:45', 40.52, '2019-07-30 07:38:45', '2019-07-30 07:38:45'),
(8, 'chocolate6', '2019-07-30 03:19:57', 40.52, '2019-07-30 08:19:57', '2019-07-30 08:19:57'),
(9, 'chocolate6', '2019-07-30 03:21:25', 40.52, '2019-07-30 08:21:25', '2019-07-30 08:21:25'),
(10, 'chocolate7', '2019-07-30 03:23:31', 50.52, '2019-07-30 08:23:31', '2019-07-30 08:23:31'),
(11, 'chocolate7', '2019-07-30 04:34:52', 50.52, '2019-07-30 09:34:52', '2019-07-30 09:34:52'),
(12, 'chocolate8', '2019-07-30 04:35:34', 24.52, '2019-07-30 09:35:34', '2019-07-30 09:35:34'),
(13, 'chocolate9', '2019-07-30 04:36:41', 34.52, '2019-07-30 09:36:41', '2019-07-30 09:36:41'),
(14, 'chocolate10', '2019-07-30 04:37:12', 36.52, '2019-07-30 09:37:12', '2019-07-30 09:37:12'),
(15, 'chocolate10', '2019-07-30 05:22:07', 36.52, '2019-07-30 10:22:07', '2019-07-30 10:22:07'),
(16, 'chocolate11', '2019-07-30 05:25:22', 38.52, '2019-07-30 10:25:22', '2019-07-30 10:25:22'),
(17, 'chocolate12', '2019-07-30 05:27:23', 18.52, '2019-07-30 10:27:23', '2019-07-30 10:27:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprausuarios`
--

DROP TABLE IF EXISTS `comprausuarios`;
CREATE TABLE `comprausuarios` (
  `idusuario` int(11) NOT NULL,
  `idcompra` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `comprausuarios`
--

INSERT INTO `comprausuarios` (`idusuario`, `idcompra`, `created_at`, `updated_at`) VALUES
(3, 6, '2019-07-30 07:18:48', '2019-07-30 07:18:48'),
(9, 4, '2019-07-30 07:16:02', '2019-07-30 07:16:02'),
(9, 12, '2019-07-30 09:35:34', '2019-07-30 09:35:34'),
(9, 14, '2019-07-30 09:37:12', '2019-07-30 09:37:12'),
(9, 15, '2019-07-30 10:22:07', '2019-07-30 10:22:07'),
(9, 16, '2019-07-30 10:25:22', '2019-07-30 10:25:22'),
(9, 17, '2019-07-30 10:27:23', '2019-07-30 10:27:23'),
(10, 5, '2019-07-30 07:18:05', '2019-07-30 07:18:05'),
(10, 7, '2019-07-30 07:38:45', '2019-07-30 07:38:45'),
(10, 8, '2019-07-30 08:19:57', '2019-07-30 08:19:57'),
(10, 9, '2019-07-30 08:21:25', '2019-07-30 08:21:25'),
(10, 10, '2019-07-30 08:23:31', '2019-07-30 08:23:31'),
(10, 11, '2019-07-30 09:34:52', '2019-07-30 09:34:52'),
(10, 13, '2019-07-30 09:36:41', '2019-07-30 09:36:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `metodo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `ruta` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `logs`
--

INSERT INTO `logs` (`usuario`, `metodo`, `ruta`, `hora`, `created_at`, `updated_at`) VALUES
('admin', 'POST', 'Usuarios/alta', '2019-07-29 03:00:00', '2019-07-28 04:22:42', '2019-07-28 04:22:42'),
('admin', 'POST', 'Usuarios/alta', '2019-07-29 03:00:00', '2019-07-28 04:25:20', '2019-07-28 04:25:20'),
('admin', 'POST', 'Usuarios/alta', '2019-07-29 04:27:35', '2019-07-28 04:27:35', '2019-07-28 04:27:35'),
('admin', 'POST', 'Usuarios/alta', '2019-07-29 05:40:03', '2019-07-30 05:40:03', '2019-07-30 05:40:03'),
('admin', 'POST', 'Usuarios/alta', '2019-07-30 00:49:30', '2019-07-30 05:49:31', '2019-07-30 05:49:31'),
('admin', 'GET', 'Usuarios/lista', '2019-07-30 01:19:48', '2019-07-30 06:19:48', '2019-07-30 06:19:48'),
('user1', 'POST', 'Compras/alta', '2019-07-30 01:58:08', '2019-07-30 06:58:08', '2019-07-30 06:58:08'),
('user1', 'POST', 'Compras/alta', '2019-07-30 01:58:35', '2019-07-30 06:58:35', '2019-07-30 06:58:35'),
('user1', 'POST', 'Compras/alta', '2019-07-30 02:14:58', '2019-07-30 07:14:58', '2019-07-30 07:14:58'),
('user1', 'POST', 'Compras/alta', '2019-07-30 02:16:02', '2019-07-30 07:16:02', '2019-07-30 07:16:02'),
('user2', 'POST', 'Compras/alta', '2019-07-30 02:18:05', '2019-07-30 07:18:05', '2019-07-30 07:18:05'),
('admin', 'POST', 'Compras/alta', '2019-07-30 02:18:48', '2019-07-30 07:18:48', '2019-07-30 07:18:48'),
('admin', 'GET', 'Compras/lista', '2019-07-30 02:22:03', '2019-07-30 07:22:03', '2019-07-30 07:22:03'),
('admin', 'GET', 'Compras/lista', '2019-07-30 02:22:56', '2019-07-30 07:22:56', '2019-07-30 07:22:56'),
('admin', 'GET', 'Usuarios/lista', '2019-07-30 02:23:38', '2019-07-30 07:23:38', '2019-07-30 07:23:38'),
('user1', 'GET', 'Compras/lista', '2019-07-30 02:36:19', '2019-07-30 07:36:19', '2019-07-30 07:36:19'),
('user2', 'GET', 'Compras/lista', '2019-07-30 02:37:51', '2019-07-30 07:37:51', '2019-07-30 07:37:51'),
('user2', 'POST', 'Compras/alta', '2019-07-30 02:38:45', '2019-07-30 07:38:45', '2019-07-30 07:38:45'),
('user2', 'GET', 'Compras/lista', '2019-07-30 02:38:51', '2019-07-30 07:38:51', '2019-07-30 07:38:51'),
('user1', 'GET', 'Compras/lista', '2019-07-30 02:39:13', '2019-07-30 07:39:13', '2019-07-30 07:39:13'),
('user1', 'GET', 'Compras/dir', '2019-07-30 03:06:50', '2019-07-30 08:06:50', '2019-07-30 08:06:50'),
('user1', 'GET', 'Compras/dir', '2019-07-30 03:07:38', '2019-07-30 08:07:38', '2019-07-30 08:07:38'),
('user1', 'GET', 'Compras/dir', '2019-07-30 03:12:37', '2019-07-30 08:12:37', '2019-07-30 08:12:37'),
('user1', 'GET', 'Compras/dir', '2019-07-30 03:13:31', '2019-07-30 08:13:31', '2019-07-30 08:13:31'),
('user2', 'POST', 'Compras/altaconimagen', '2019-07-30 03:19:57', '2019-07-30 08:19:57', '2019-07-30 08:19:57'),
('user2', 'POST', 'Compras/altaconimagen', '2019-07-30 03:21:25', '2019-07-30 08:21:25', '2019-07-30 08:21:25'),
('user2', 'POST', 'Compras/altaconimagen', '2019-07-30 03:23:31', '2019-07-30 08:23:31', '2019-07-30 08:23:31'),
('admin', 'GET', 'Compras/listaconimagenes', '2019-07-30 03:54:24', '2019-07-30 08:54:24', '2019-07-30 08:54:24'),
('admin', 'GET', 'Compras/listaconimagenes', '2019-07-30 03:55:45', '2019-07-30 08:55:45', '2019-07-30 08:55:45'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:00:24', '2019-07-30 09:00:24', '2019-07-30 09:00:24'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:02:15', '2019-07-30 09:02:15', '2019-07-30 09:02:15'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:04:44', '2019-07-30 09:04:44', '2019-07-30 09:04:44'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:05:14', '2019-07-30 09:05:14', '2019-07-30 09:05:14'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:06:23', '2019-07-30 09:06:23', '2019-07-30 09:06:23'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:23:54', '2019-07-30 09:23:54', '2019-07-30 09:23:54'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:25:23', '2019-07-30 09:25:23', '2019-07-30 09:25:23'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:25:45', '2019-07-30 09:25:45', '2019-07-30 09:25:45'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:25:56', '2019-07-30 09:25:56', '2019-07-30 09:25:56'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:26:06', '2019-07-30 09:26:06', '2019-07-30 09:26:06'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:26:14', '2019-07-30 09:26:14', '2019-07-30 09:26:14'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:26:22', '2019-07-30 09:26:23', '2019-07-30 09:26:23'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:28:21', '2019-07-30 09:28:21', '2019-07-30 09:28:21'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:28:29', '2019-07-30 09:28:29', '2019-07-30 09:28:29'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:29:35', '2019-07-30 09:29:35', '2019-07-30 09:29:35'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:30:51', '2019-07-30 09:30:51', '2019-07-30 09:30:51'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:31:03', '2019-07-30 09:31:03', '2019-07-30 09:31:03'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:31:19', '2019-07-30 09:31:19', '2019-07-30 09:31:19'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:31:45', '2019-07-30 09:31:45', '2019-07-30 09:31:45'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:33:46', '2019-07-30 09:33:46', '2019-07-30 09:33:46'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:34:18', '2019-07-30 09:34:18', '2019-07-30 09:34:18'),
('user2', 'POST', 'Compras/altaconimagen', '2019-07-30 04:34:52', '2019-07-30 09:34:52', '2019-07-30 09:34:52'),
('user2', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:34:55', '2019-07-30 09:34:55', '2019-07-30 09:34:55'),
('user1', 'POST', 'Compras/alta', '2019-07-30 04:35:34', '2019-07-30 09:35:34', '2019-07-30 09:35:34'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:35:44', '2019-07-30 09:35:44', '2019-07-30 09:35:44'),
('user2', 'POST', 'Compras/altaconimagen', '2019-07-30 04:36:41', '2019-07-30 09:36:41', '2019-07-30 09:36:41'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:36:50', '2019-07-30 09:36:50', '2019-07-30 09:36:50'),
('user1', 'POST', 'Compras/altaconimagen', '2019-07-30 04:37:12', '2019-07-30 09:37:12', '2019-07-30 09:37:12'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:37:17', '2019-07-30 09:37:17', '2019-07-30 09:37:17'),
('admin', 'GET', 'Compras/listaconimagenes/', '2019-07-30 04:37:43', '2019-07-30 09:37:43', '2019-07-30 09:37:43'),
('user1', 'POST', 'Compras/altaconimgmarcadeagua', '2019-07-30 05:22:07', '2019-07-30 10:22:07', '2019-07-30 10:22:07'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 05:22:31', '2019-07-30 10:22:31', '2019-07-30 10:22:31'),
('user1', 'POST', 'Compras/altaconimgmarcadeagua', '2019-07-30 05:25:22', '2019-07-30 10:25:22', '2019-07-30 10:25:22'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 05:25:26', '2019-07-30 10:25:26', '2019-07-30 10:25:26'),
('user1', 'POST', 'Compras/altaconimgmarcadeagua', '2019-07-30 05:27:23', '2019-07-30 10:27:23', '2019-07-30 10:27:23'),
('user1', 'GET', 'Compras/listaconimagenes/', '2019-07-30 05:27:28', '2019-07-30 10:27:28', '2019-07-30 10:27:28'),
('user2', 'PUT', 'Usuarios/modificar', '2019-07-30 06:28:02', '2019-07-30 11:28:02', '2019-07-30 11:28:02'),
('admin', 'GET', 'Logs/lista', '2019-07-30 06:36:21', '2019-07-30 11:36:21', '2019-07-30 11:36:21'),
('admin', 'GET', 'Logs/lista', '2019-07-30 06:36:41', '2019-07-30 11:36:41', '2019-07-30 11:36:41'),
('admin', 'GET', 'Logs/lista', '2019-07-30 06:36:48', '2019-07-30 11:36:48', '2019-07-30 11:36:48');

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
(8, 'pibeslog2', '123456', 'masculino', 'usuario', '2019-07-28 04:27:35', '2019-07-28 04:27:35'),
(9, 'user1', '123456', 'masculino', 'usuario', '2019-07-30 05:40:03', '2019-07-30 05:40:03'),
(10, 'user2', '123', 'femenino', 'usuario', '2019-07-30 06:28:02', '2019-07-30 11:28:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comprausuarios`
--
ALTER TABLE `comprausuarios`
  ADD PRIMARY KEY (`idusuario`,`idcompra`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>REGISTRO</title>
	<link rel="stylesheet" href="estilos_login.css">
	<link rel="icon" href="img/Logo.png">
</head>
<body>
	<section class="container">
		<form method="post" class="container__form">

			<img src="https://user-images.githubusercontent.com/89596874/140325275-fb69e170-0348-4a5e-b463-c6742733beae.png" alt="">
			<input type="email" name="email" placeholder="CORREO" id="email">
			<input type="password" name="password" placeholder="CONTRASEÑA" id="pass">
			<input type="submit" name="register" value="REGISTRAR" id="btn_reg" onclick="register()"></a>

		</form>
		<span>¿Ya tienes cuenta? <a href="index.html">Iniciar sesión</a></span>
	</section>

<?php

	include("con_db.php");

	if (isset($_POST['register'])) {
		if (strlen($_POST['email']) >= 1 && strlen($_POST['password']) >= 1) {

			$email = trim($_POST['email']);
			$password = trim($_POST['password']);
			$fecha_reg = date("d/m/y");
			$consulta = "INSERT INTO datos(email, fecha_reg, password) VALUES ('$email','$fecha_reg','$password')";
			$resultado = mysqli_query($conex, $consulta);

			if ($resultado) {
				?>
				<h3 class="ok"> !Te has registrado correctamente! </h3>
				<?php
			} else {
				?>
				<h3 class="bad"> !Ups, ha ocurrido un error! </h3>
				<?php
			}

		} else {
			?>
			<h3 class="bad"> !Porfavor completa los campos! </h3>
			<?php
		}
	}
?>

</body>
<script src="js/login.js"></script>
</html>
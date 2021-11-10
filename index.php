<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LOGIN</title>
	<link rel="stylesheet" href="estilos_login.css">
	<link rel="icon" href="img/botones/Logo.png">
</head>
<body>
	<section class="container">

		<form method="post" class="container__form">

			<img src="https://user-images.githubusercontent.com/89596874/140325275-fb69e170-0348-4a5e-b463-c6742733beae.png">
			<input type="email" name="email" placeholder="CORREO" id="emailLog">
			<input type="password" name="password" placeholder="CONTRASEÑA" id="passLog">
			<input type="submit" name="entrar" value="ENTRAR" id="btn_login" onclick="login()"></a>
		</form>

		<span>¿No tienes cuenta? <a href="registro.php">Registrar</a></span>

	</section>

<?php

	if (isset($_POST['entrar'])) {
		if (strlen($_POST['email']) >= 1 && strlen($_POST['password']) >= 1) {

			$usuario=$_POST['email'];
			$contraseña=$_POST['password'];

			$_SESSION['email']=$usuario;

			$conexion = mysqli_connect("localhost","root","","registro");

			$consulta="SELECT*FROM datos where email='$usuario' and password='$contraseña'";

			$resultado=mysqli_query($conexion,$consulta);

			$filas=mysqli_num_rows($resultado);

			if ($filas) {
				header("location:home.html");
			}
			else {
				?>
				<?php
				//include("index.php");
				?>
				<h3 class="bad"> !Error en la autentificación! </h3>
				<?php
			}
			mysqli_free_result($resultado);
			mysqli_close($conexion);
		}
		else {
			?>
			<h3 class="bad"> !Porfavor completa los campos! </h3>
			<?php
		}
	}
?>

	
</body>
<script src="js/login.js"></script>
</html>
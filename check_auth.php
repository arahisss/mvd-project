<?php
if(!isset($_SESSION["user"])){
	echo "Необходимо авторизоваться.";
	exit;
}
?>
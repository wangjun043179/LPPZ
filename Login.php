<?php
	//解决乱码问题
	header("Content-type:text/html;charset=utf-8");
	//获取页面上文本框中输入的数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	//建立连接
	$con = mysql_connect("localhost",'root','root');
	//选择数据库
	mysql_select_db('lppz',$con);
	//执行sql语句
	$sqlstr = "select * from user where username = '$username' and passwrd = '$password'";
	$result = mysql_query($sqlstr,$con);
	$rows = mysql_num_rows($result);
	if($rows!=0){
		header('location:index.html');
	}else{
		echo "用户不存在或密码输入错误，请检查后重新输入";
	}
?>
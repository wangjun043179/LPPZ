<?php
	//解决乱码问题
	header("Content-type: text/html; charset=utf-8");
	//接收数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sex = $_POST['sex'];
	$age = $_POST['age'];
	$tel = $_POST['tel'];
	$address = $_POST['address'];
	//建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//选择数据库
		mysql_select_db('lppz',$con);
		//执行sql语句
		//先判断数据库中是否存在
		$sqlstr = "select * from user where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows>0){
			mysql_close($con);
			echo "该用户已被注册过，请另起他名";
		}else{
			$sqlstr = "insert into user (username,passwrd,sex,age,tel,address) values ('$username','$password','$sex','$age','$tel','$address')";
			$result = mysql_query($sqlstr,$con);
			mysql_close($con);
			//判断是否注册成功
			if($result){
				//注册成功跳转到注册成功页面
				header("location:../regSuccess.html");
			}else{
				echo "注册失败";
			}
		}
	}	
?>
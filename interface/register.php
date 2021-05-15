<?php

    include('./library/conn.php');

    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];

    // 3. 查询用户名是否存在
    $sql = "select * from user_info where phone='$phone'";
    
    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo '<script>alert("用户已存在");</script>';

        if($password){
            echo '<script>location.href="../src/html/login.html"</script>';
        }else{
            echo '<script>location.href="../src/html/register.html"</script>';
        }

        $mysqli->close(); // 断开连接
        die(); // 终止代码执行
    }

    // 插入数据

    if($password){
        $insert = "insert into user_info (username,phone,password) values ('$phone','$phone','$password')";
    }else{
        $insert = "insert into user_info (username,phone,password) values ('$phone','$phone','$phonef')";
    }

    // 执行插入操作时 返回一个布尔值 表示数据是否插入成功
    $res = $mysqli->query($insert); 
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../src/html/index.html"</script>';
    }

?>
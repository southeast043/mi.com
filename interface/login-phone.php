<?php
    // 注册的逻辑
    // 1. 连接数据库
    // 2. 接收页面发送的数据
    // 3. 在数据库中查询用户名
    //    用户名如果存在 返回结果 用户名已存在 回到注册页面
    //    用户名不存在 将用户传递的数据 写入数据库 返回结果 注册成功 回到首页

    include('./library/conn.php');

    $phone = $_REQUEST['phone'];

    // 3. 查询用户名是否存在
    $sql = "select * from user_info where phone='$phone'";
    
    $result = $mysqli->query($sql);

    if($result->num_rows>0){

        setcookie('username',$phone,time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');

        echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="../src/html/index.html"</script>';
        $mysqli->close(); // 断开连接
        die(); // 终止代码执行
    }

    // 插入数据
    $insert = "insert into user_info (username,phone) values ('$phone','$phone')";

    // 执行插入操作时 返回一个布尔值 表示数据是否插入成功
    $res = $mysqli->query($insert); 
    $mysqli->close();

    if($res){

        setcookie('username',$phone,time()+3600*24,'/');
        setcookie('isLogined','true',time()+3600*24,'/');

        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="../src/html/index.html"</script>';
    }

?>
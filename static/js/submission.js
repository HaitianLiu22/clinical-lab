layui.use(function () {
    var $ = layui.$;
    var form = layui.form;
    var layer = layui.layer;

    // 提交事件
    form.on('submit(result-submit)', function (data) {
        var field = data.field; // 获取表单全部字段值

        var templateParams = {
            to_name: "Weixiang Yan",
            from_name: field.model,
            message: JSON.stringify(field),
            to_email: "yanweixiang.ywx@gmail.com",
        };
        emailjs.init({
            publicKey: "m9pcbKzOmSflbvqQX"
        });
        emailjs.send('service_wodyt5b', 'template_xp4rz3a', templateParams).then(
            (response) => {
                console.log('SUCCESS', response.status, response.text);
                layer.load(0, {shade: false});
                setTimeout(function () {
                    layer.closeAll();
                    layer.msg('SUCCESS', {time: 3000}, function () {
                        window.location.href = 'index.html';
                    });
                }, 3000);
            },
            (error) => {
                console.log('FAILED...', error);
                layer.msg(error);
            }
        );

        return false;
    });
});
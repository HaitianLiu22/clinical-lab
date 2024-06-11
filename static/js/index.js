function copyToClipboard() {
    var textToCopy = document.getElementById("citation-text").innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        layui.layer.msg('<span style="font-size: 18px;">Copied to clipboard!</span>');
    }).catch(error => {
        layui.layer.msg(error);
    });
}
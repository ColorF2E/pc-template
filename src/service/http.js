import Http from 'brown-http';

const http = new Http(false, res => {
    if (res.status >= 400) {
        window.App.$message.error(`服务出错，状态码：${res.status}`);
        throw Error('服务出错');
    }

    window['sessionFlg'] = window['sessionFlg'] || 'Y';
    const code = Number(res.code);
    if ((code === 201 || code === 200) && sessionFlg === 'Y') {
        window.App.$message.error('用户登录已失效，请重新登录');
        sessionFlg = 'N';
        return;
    } else if (code === 0) {
        sessionFlg = 'Y';
    }
    return res;
}, {}, err => {
    console.error(err);
});

export default http;
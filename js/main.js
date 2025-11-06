// ----------------------Login/Sign Up Function----------------------------------
    const dlg = document.getElementById('loginDialog');
    document.getElementById('openLogin').addEventListener('click', () => dlg.showModal());
    document.getElementById('closeLogin').addEventListener('click', () => dlg.close());
    // 是否需要加一个X的关闭按钮？
    // 登录是使用email还是别的自由命名？目前必须使用email登录
    // ※注意一下这里的提交表单是否需要防止重定向
// -----------------------Note----------------------------------------------------
    // 目前的架构到底是跟着flask项目结构做还是跟着原来的js文件夹结构做？
    // ※ ※ ※记得把导航做成模板！！！！！！！
    // 首页到底叫homepage还是index？





// --------------------------call UI-----------------------------------
// 设计一个登录页面
    // 登录和注册是同一个按钮和页面吗？
// 登录图标旁边的用户头像，在没登陆前哪来的登录头像？需要设计登录前和登陆后的区别显示（※ 代码也需要设置此功能！！！）
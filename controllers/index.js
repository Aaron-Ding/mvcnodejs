var fn_index = async (ctx, next) => {
    ctx.render('index.html',{
        title: 'welcome'
    });
};
var fn_signin = async(ctx,next)=>{
    var
        email = ctx.request.body.email || '';
        password = ctx.request.body.email || '';
    console.log(`signin with name: ${email}, password: ${password}`);
    if (email === 'admin@example.com' && password === '123456'){
        ctx.render('signin-ok.html',{
            title: "sign IN OK",
            name : "Mr Node"
        });
    }else{
        ctx.render('signin-failed.html',{
            title: "Sign In failed"
        });
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};
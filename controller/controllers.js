const path=require('path')

exports.getHomePage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','home.html'));
}

exports.postHomePage=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.Email;
    res.send(`'${name} ,'${email} "your form successfuly filled" `)
}

exports.getFormPage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','form.html'));
}



//module.exports=routes

exports.getErrorPage=(req,res,next)=>{
    res.status(404).render('404',{pageTittle: 'page Not Found'})
}
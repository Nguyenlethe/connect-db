import db from '../models/index'

 const getHomePage = async(req, res) =>  {
    try{

        let data = await db.User.findAll()
        console.log(data)
        return res.render('homepage.ejs', { 
            data : JSON.stringify(data),
        })

    }catch(e){
        console.log(e)
    }

}

const getAboutPage = (req, res) =>  {
    return res.render('aboutpage.ejs')
}

export default { getHomePage,getAboutPage }
const connection = require('../db/connection')

module.exports={
    async getNews(request,response){

        await connection.query('SELECT * FROM news WHERE feature = 0 AND sub_feature = 0',(err ,rows ,fields)=>{

            response.json(rows)
        })
        
    },
    async getFeature(request,response){

        await connection.query('SELECT * FROM news WHERE feature = 1',(err,rows,field)=>{

            response.json(rows)
        })
    },
    async getSubFeature(request,response){

        await connection.query('SELECT * FROM news WHERE sub_feature = 1',(err,rows,field)=>{

            response.json(rows)
        })
    }
}
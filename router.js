const express = require('express')

const router= express.Router()

const conn= require('./database/db')

router.get('/', function (req, res){
    conn.query('SELECT * FROM tb_user', (error, result)=>{
        if(error){
            throw error;
        }else{
           res.render('index', {resultado: result})
        }
    })
})

router.get('/adicionar',(req, res)=>{
    res.render('create')
})


router.get('/edit-action/:id',(req, res)=>{
      
       const id= req.params.id

    conn.query('SELECT * FROM tb_user WHERE id=?',[id],(error, result)=>{
      
        if(error){
            throw error
        }else{
            res.render('edit',{user: result[0]})
        }
    })

})

router.get('/delete-action/:id',(req,res)=>{
    const id= req.params.id
    conn.query('DELETE FROM tb_user WHERE id=?',[id],(error, result)=>{
        
        if(error){
            throw error
        }else{
            res.redirect('/')
        }
    })
})


const crud = require('./controllers/crud')

router.post('/add-action', crud.save)
router.post('/edit-action', crud.update)

module.exports= router;
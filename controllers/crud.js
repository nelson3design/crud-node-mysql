const conn = require('../database/db')
exports.save = (req, res)=>{
    const nome= req.body.nome
    const email= req.body.email
    const idade= req.body.idade
    const tel= req.body.tel
  conn.query('INSERT INTO tb_user SET?',{nome: nome, email: email, idade: idade, tel: tel },(error, result)=>{
      if(error){
          console.log(error)
      }else{
          res.redirect('/')
      }
  })
}

exports.update= (req, res)=>{
    const id= req.body.id
    const nome= req.body.nome
    const email= req.body.email
    const idade= req.body.idade
    const tel= req.body.tel

    conn.query('UPDATE tb_user SET? WHERE id = ?',[{nome:nome, email:email,idade:idade, tel:tel}, id],(error, result)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}
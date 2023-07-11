const getAllNote =(req,res,next) =>{
    res.json({message:"GET all the notes"})
}


const newNote =(req,res,next) =>{
    res.json({message:"POST new note"})
}
const deleteAllNote =(req,res,next) =>{
    res.json({message:" DELETE all the notes"})
}
const getOneNote =(req,res,next) =>{
    res.json({message:"GET 1 note"})
}

const newComment =(req,res,next) =>{
    res.json({message:"POST 1 note comment"})
}
const deleteOneNote =(req,res,next) =>{
    res.json({message:"DELET 1 note "})
}



module.exports ={
    getAllNote,
    newNote ,
    deleteAllNote ,
    getOneNote ,
    newComment ,
    deleteOneNote

    }
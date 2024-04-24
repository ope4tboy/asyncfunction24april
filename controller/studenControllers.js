const Student = require('../models /studentModel')

const getAllStudents = async (req, res) => {
    try{
        const students = await Student.find()
        return res.status(200).json(students)
    } catch (error){
        return res.status(500).json(error)
    }
} 


const createStudents = async (req, res) => {
    if (!req.body.email){
        return res.status(400).json({mesage: 'please enter your email'})
    }

    if (!req.body.name){
        return res.status(400).json({mesage: 'please enter your name'})
    }

    if (!req.body.phone){
        return res.status(400).json({mesage: 'please enter your phone'})
    }

    if (!req.body.password){
        return res.status(400).json({mesage: 'please enter your password'})
    }

    try{
        const newStudent = await Student.create({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,

        })
        return res.status(201).json(newStudent)
    }catch (error){
        return res.status(500).json(error)
    }


}

const getSinglestudent = async (req, res) =>{
    try {
        const singleStudent = await Student.findById(req.params.id)
        res.status(200).json(singleStudent)
    }catch (error){
        return res.status(500).json(error)


    }
}


const updateStudent = async (req, res) =>{
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id,  req.body,{new:true})
        if (updateStudent) {
            res.status(200).json(updateStudent)
        }
        } catch (error){
            return res.status(500).json(error)

        
    }
}


const deleteStudent = async (req, res) =>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (deleteStudent) {
            res.status(200).json({message: "student deleted successfuly"})
        }
        } catch (error){
            return res.status(500).json(error)

        
    }
}

module.exports = {getAllStudents, createStudents, getSinglestudent, updateStudent,deleteStudent}
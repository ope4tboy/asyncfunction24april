const express = require('express')
const router = express.Router()
const {getAllStudents, createStudents, getSinglestudent, updateStudent, deleteStudent} = require ('../controller/studenControllers')

router.route('/students').get(getAllStudents).post(createStudents)
router.route('/students/:id').get(getSinglestudent).put(updateStudent).delete(deleteStudent)


module.exports = router
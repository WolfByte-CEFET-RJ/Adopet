const connection = require('./../models/connection')  
const crypto = require('crypto')

module.exports = {
    async list_all_tasks (req,res) {
        try {
        const task = await connection('taskschema').select('taskschema.*')
        res.json(task) } catch (error) {
            res.status(400).send(error)
        }
    },

    async create_a_task (req,res) {
        const {name} = req.body
        const id = crypto.randomBytes(2).toString('HEX')

        try {
           await connection('taskschema').insert({ id, name })
            res.json(id)    
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async read_a_task (req,res) {
        const id = req.headers.id
        try {
            const task = await connection('taskschema').where('id', id).select('*').first()
            if(!task) { return res.status(400).send(error)}
            res.json(task)
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async update_a_task (req,res) {
        const id = req.headers.id
        const {update} = req.body
        const task = await connection('taskschema').where('id', id).update({ status: update})
        if(!task) { return res.status(400).send(error)}
        res.json({
            status: 'update complete'
        })
    },

    async delete_a_task (req,res) {
        const id = req.headers.id
        try {
            await connection('taskschema').where('id',id).del()
            res.json({
                status: 'Task delete successfully'
            }) 
        } catch (error) {
            return res.status(400).send(error)
        }
    } 
}
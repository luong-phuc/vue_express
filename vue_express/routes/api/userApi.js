const express = require('express')
const router = express.Router();
const User = require('../../models/user')

router.get('/', (req, res) => {
    let search = req.query.s

    if(search) {
        let user = [
            new User({
                id: search,
                fullName: "Luong Phuc",
                email: "luong.phuc@mulodo.com",
                password: null
            })
        ]

        return res.send(JSON.stringify(user))  
    }

    let user = [
        new User({
            id: "001",
            fullName: "Luong Phuc",
            email: "luong.phuc@mulodo.com",
            password: null
        }),
        new User({
            id: "004",
            fullName: "Luong Phuc",
            password: null
        }),
        new User({
            id: "002",
            fullName: "Luong Vinh",
            email: "luong.vinh@mulodo.com",
            password: null
        }),
        new User({
            id: "003",
            fullName: "Luong Minh"
        })
    ]
    res.send(JSON.stringify(user)) 
})

router.get('/:id', (req, res) => {
    if(req.params.id == '404') {
        return res.sendStatus(404)
    }

    let user = new User({
        id: req.params.id,
        fullName: "Luong Phuc",
        email: "luong.phuc@mulodo.com",
        password: null
    })
    res.send(JSON.stringify(user)) 
})

router.post('/', (req, res) => {
    let user = new User({
        id: '200',
        fullName: "Luong Phuc",
        email: "luong.phuc@mulodo.com",
        password: null
    })
    res.send(JSON.stringify(user)) 
})

router.put('/:id', (req, res) => {
    let user = new User({
        id: req.params.id,
        fullName: "Luong Phuc",
        email: "luong.phuc@mulodo.com",
        password: null
    })
    res.send(JSON.stringify(user)) 
})

module.exports = router

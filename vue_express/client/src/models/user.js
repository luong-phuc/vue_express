class User {
    constructor(data) {
        // if(!data) {
        //     return
        // }

        // let params = ['id','fullName', 'email', 'password']

        // params.forEach(function(property) {
        //     console.log(data[property])

        //     if(data[property]) {
        //         this[property] = data[property]
        //     }
        // })

        this['id'] = data['id']
        this['fullName'] = data['fullName']
        this['email'] = data['email']
        this['password'] = data['password']
    }
}

export default User
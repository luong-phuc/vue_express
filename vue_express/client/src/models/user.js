class User {
    constructor(data) {
        if(!data) {
            return
        }

        let params = ["id","fullName", "email", "password"]
        const obj = this

        params.forEach(function(property) {
            obj[property] = data[property] || null
        })
    }
}

export default User

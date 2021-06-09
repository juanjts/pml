class User {
    constructor(id, nombres, apellidos, typid, numid, email, celular, nacimiento){
        this.id = id,
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.typid = typid,
        this.numid = numid,
        this.email = email,
        this.celular = celular,
        this.nacimiento = nacimiento
    }
}

module.exports = User;
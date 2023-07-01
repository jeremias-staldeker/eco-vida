class User {
    constructor(id, name, phone, email, password, role) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.password = password;
      this.creationDate = new Date();
      this.role = role;
    }
  }
  
  module.exports = User;
  
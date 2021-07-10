interface IPersona {
  firstname: string;
  lastname: string;
  phone: string;
  birthday: Date;
  calcEdad(): number;
}

class Persona implements IPersona {
  firstname = 'Juan';
  lastname = 'Valdés';
  phone = '2321390233';
  birthday = new Date(1976, 7, 1);
  dni = '222334322' ;   
  calcEdad() {
      return new Date().getFullYear() - this.birthday.getFullYear();
  }
}

const persona = new Persona();
console.log(persona.calcEdad())

const person: IPersona = persona;
console.log(person.calcEdad())
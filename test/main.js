import {someFunction, SomeClass} from './module-a'

class ClientClass extends SomeClass {
  print() {
    console.log('ClientClass.print', someFunction())
  }
}

new ClientClass().print()
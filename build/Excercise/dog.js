"use strict";
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static load(id) {
        // code to load dog from database
        return dog;
    }
    save() {
        // code to save dog to database
    }
}

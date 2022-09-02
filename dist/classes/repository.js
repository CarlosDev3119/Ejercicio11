"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    add() {
        console.log('Add something in database');
    }
    update() {
        console.log('Update something in database...');
    }
    remove() {
        console.log('Deleting from database...');
    }
    find() {
        console.log('Finding something in database...');
    }
}
exports.Repository = Repository;

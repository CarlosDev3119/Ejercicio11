"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
class UseCase {
    constructor(repo, notifier) {
        this.repo = repo;
        this.notifier = notifier;
        this.repo = repo;
        this.notifier = notifier;
    }
    doSomethingWithTaxes() {
        console.log('Do something related with taxes');
    }
    saveChanges() {
        this.repo.update();
    }
    notify() {
        this.notifier.notify("Hi, notify succesfull");
    }
}
exports.UseCase = UseCase;

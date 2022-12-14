"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notify_1 = require("./classes/notify");
const repository_1 = require("./classes/repository");
const todo_1 = require("./classes/todo");
const repo = new repository_1.Repository();
const notifier = new notify_1.NotificationService();
const myUseCase = new todo_1.UseCase(repo, notifier);
myUseCase.doSomethingWithTaxes();
myUseCase.saveChanges();
myUseCase.notify();

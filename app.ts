import { NotificationService } from "./classes/notify";
import { Repository } from "./classes/repository";
import { UseCase } from "./classes/todo";

const repo = new Repository();
const notifier = new NotificationService();
const myUseCase = new UseCase(repo, notifier);

myUseCase.doSomethingWithTaxes();
myUseCase.saveChanges();
myUseCase.notify();


export class UseCase{
    constructor( public repo: any, public notifier: any){
        this.repo = repo;
        this.notifier = notifier;
    }

    doSomethingWithTaxes(){
        console.log('Do something related with taxes');
    }

    saveChanges(){
        this.repo.update();
    }

    notify(){
        this.notifier.notify("Hi, notify succesfull");
    }
}




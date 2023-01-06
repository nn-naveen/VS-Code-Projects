import { LightningElement, track } from 'lwc';

export default class WelcomeComponent extends LightningElement {
    fullName = 'Naveen Pasupuleti'
    title = 'aura'
    changeHandler(event){
        this.title= event.target.value

    }
    @track address={
        street:'Sai Ram Colony',
        town:'Kavali',
        pincode: 524201 

    }
    trackHandler(event){
        this.address.town = event.target.value
    }

    /**Getter Example */
    users=["Mahendra","Vamshi","Sri Krishna"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
        return this.num1*this.num2
    }
}
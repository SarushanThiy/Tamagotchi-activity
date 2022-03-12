// Pet Class
class Pet {
    constructor(name, happiness = 5, hunger = 5){
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
    }

    //Food function
    feed(food){
        switch (food){
            case 'Bananas':
                this.hunger--
                console.log(`Yum ${this.name} has eaten a banana`)
                break;
            case 'Spinach':
                this.hunger++;
                this.happiness--;
                console.log(`EWW ${this.name} did not like that`)
                break;
            case 'Cookie':
                this.hunger-=2;
                this.happiness+=3;
                console.log(`${this.name} LOVES THIS`)
                break;
            default:  
                console.log('tin stuff, boring');
        }
    };

     //Play function
     play(){
        this.happiness++;
        return this;
    };

    //Check
    check(){
        console.log(`${this.name} is ${this.happiness} /10 and ${this.hunger} /10`)
    }
}

//Tamagotchi Class
class Tamagotchi extends Pet {
    speak(){ console.log(`POWowK`);
    return this; 
    };
}

//New Tamagotchi
let Mike = new Tamagotchi ("Mike", 6, 5)
let Gary = new Pet ("Gary", 4, 10)
let Pika = new Tamagotchi ("Pika", 4, 10)

//Commands
Gary.check();
Gary.feed();
Gary.check();
Gary.feed('Spinach');
Gary.check;
Gary.feed('Cookie');
Gary.check();
Mike.speak();
Pika.speak();
Pika.check();




class Person{
    constructor(name){
        this.name = name
    }

    hireScooter(destination,scooter){
        //find scooter in charging array, splice to remove it
        
        if (scooter.battery==0) throw new Error("Scooter needs to be fully charged at the charging location")
        var ind = destination.charging.findIndex(s => s = this.name)
        destination.charging.splice(ind,1)

        //when hired, the battery in scooter drains to 0
        scooter.battery = 0 

    }
}

module.exports = Person
class ChargeStation{
    
    
    constructor(location){
        this.location = location
        this.charging = []
    }

    
    
    async chargeScooter(scooter){
        return new Promise((resolve,reject)=>{
            
        setTimeout(() => { 
            scooter.battery = 100;
            this.charging.push(scooter);
            resolve(scooter)
            })
        }, 2000)
        

    }

}


module.exports = ChargeStation
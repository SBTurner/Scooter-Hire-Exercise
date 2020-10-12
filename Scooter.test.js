const Scooter = require("./Scooter")
const ChargeStation = require("./ChargeStation")
const Person = require("./Person")


describe("Scooter Hire in London", ()=>{
    test("Scooter class has a name", ()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        expect(fast1.name).toBe("Fast Red Scooter")
    })
    test("Charge stations have a location", ()=>{
        const Kew = new ChargeStation("Kew")
        expect(Kew.location).toBe("Kew")
    })
    test("Scooter can be charging at a location", async ()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        await Kew.chargeScooter(fast1)
        expect(Kew.charging[0]).toBe(fast1)
    })
    test("Scooter initially has 100% battery",()=>{
        const fast1 = new Scooter("Fast")
        expect(fast1.battery).toEqual(100)
    })
    test("Scooter can be hired, therefore removed it from charging station", async ()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        const Sarah = new Person("Sarah")
        await Kew.chargeScooter(fast1)
        expect(Kew.charging.length).toBe(1)
        await Sarah.hireScooter(Kew,fast1)
        expect(Kew.charging.length).toBe(0)
    })
    test("Scooter can be charged", async ()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        const Sarah = new Person("Sarah")
        await Kew.chargeScooter(fast1)
        expect(Kew.charging.length).toBe(1)
        await Sarah.hireScooter(Kew,fast1)
        expect(Kew.charging.length).toBe(0)
    })
    test("Scooter battery goes from 100 to 0 during 'Hire Scooter'",async()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        const Sarah = new Person("Sarah")
        await Kew.chargeScooter(fast1)
        expect(fast1.battery).toBe(100)
        Sarah.hireScooter(Kew,fast1)
        expect(fast1.battery).toBe(0)
    })
    test("Scooter cannot be hired unless fully charged", ()=>{
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        const Katie = new Person("Katie")
        fast1.battery = 0
        console.log(fast1.battery)
        //Katie.hireScooter(Kew,fast1)
        expect(()=> Katie.hireScooter(Kew,fast1)).toThrowError("Scooter needs to be fully charged at the charging location")
    })
    test('Scooter takes time to charge', async () => {
        const fast1 = new Scooter("Fast Red Scooter")
        const Kew = new ChargeStation("Kew")
        const Sarah = new Person("Sarah")
        Sarah.hireScooter(Kew,fast1)
        expect(fast1.battery).toEqual(0)
        //console.log(fast1.battery)
        const chargedScooter = await Kew.chargeScooter(fast1)
        //console.log(chargedScooter)
        expect(chargedScooter.battery).toEqual(100)
        
    })


})
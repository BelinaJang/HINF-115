/*
 * HINF 115 2022 Fall
 * Object-oriented Programming in JS
 * Lecturer: Yichun Zhao
*/

/*
    Exercise list
    1. Create prescription class with properties and methods
    2. Create subclasses extended from prescription class
        2.1 Tablet prescription subclass
        2.2 Liquid prescription subclass
    3. Instantiate objects for each subclass
        3.1 Tablet prescription object
        3.2 Liquid prescription object
    4. Get information by calling properties and methods for each object  
*/


/*  --- Exercise 1 --------------------------------------------------------------------------------
    
    Prescription class

        1. Public properties:
            1.1. String:    commonName
            1.2. Integer:   dosageAmount
            1.3. String:    dosageUnit
            1.4. String:    dosageFrequency

        2. Private properties:
            2.1. String:    drug identification number (din)
            2.2. Double:    cost

        3. Public methods:
            3.1. getDin()
                - return din
            3.2. getInstruction()
                - return the dosage amount, and dosage unit, followed by dosageFrequency as one single string
                - Eg "2 tablets once per week"
            3.3. getCost()
                - return private method convertCostIntToStr()

        4. Private methods:
            4.1. convertCostIntToStr()
                - return cost with a dollar sign in front of it as one single string
                - Eg "$52.24"

*/
class Prescription {
    // Declare private variables 
    #din;
    #costInt;

    constructor(commonName, dinNum, dosageAmount, dosageUnit, dosageFrequency, givenCost) {
        // Public properties
        this.commonName = commonName; 
        this.dosageAmount = dosageAmount;
        this.dosageUnit = dosageUnit;
        this.dosageFrequency = dosageFrequency;


        // Private properties
        this.#din = dinNum; 
        this.#costInt = givenCost;
    }
    
    // Public methods
    getDin() {
        return this.#din;
    };
    getInstruction() {
        return this.dosageAmount + " " + this.dosageUnit + " " + this.dosageFrequency;
    };
    getCost() {
        return this.#convertCostIntToStr();
    }

    // Private methods
    #convertCostIntToStr() {
        return "$" + this.#costInt;
    }
}

/*  --- Exercise 2.1 --------------------------------------------------------------------------------

    Tablet Prescription subclass

        1. Use Presecription class by extending it

        2. Private properties
            2.1. Double:    given cost

        3. Public properties
            3.1 String:     type 
                - its value is "tablet"
            3.2 Integer:    tablet count

        4. Public methods
            4.1 get cost per tablet
                - make sure the cost is two decimals
                - return with a dollar sign
*/
class TabletPrescription extends Prescription {
    // Declare provate properties here
    #givenCost;

    constructor(commonName, dinNum, dosageAmount, dosageUnit, dosageFrequency, givenCost, tabletCount) {
        super(commonName, dinNum, dosageAmount, dosageUnit, dosageFrequency, givenCost);

        // Public properties
        this.type = "tablet";
        this.tabletCount = tabletCount;

        // Private properties
        this.#givenCost = givenCost;
    }

    getCostperTablet() {
        return "$" + (this.#givenCost / this.tabletCount).toFixed(2);
    }

}

/*  --- Exercise 2.2 --------------------------------------------------------------------------------

    Liquid Prescription subclass

        1. Use Presecription class by extending it

        2. Private properties
            2.1. Double:    given cost

        3. Public properties
            3.1 String:     type 
                - its value is "liquid"
            3.2 Integer:    volume in Ml

        4. Public methods
            4.1 get cost per ml
                - make sure the cost is two decimals
                - return with a dollar sign
*/

class LiquidPrescription extends Prescription {
    // Declare provate properties here
    // private properties
    #givenCost;

    constructor(commonName, dinNum, dosageAmount, dosageUnit, dosageFrequency, givenCost, volume) {
        super(commonName, dinNum, dosageAmount, dosageUnit, dosageFrequency, givenCost);

        // Public properties
        this.type = "liquid";
        this.volume = volume;

        // Private properties
        this.#givenCost = givenCost;
    }

    getCostperMl() {
        return "$" + (this.#givenCost / this.volume).toFixed(2);
    }

}



/*  --- Exercise 3.1 --------------------------------------------------------------------------------

    Create a tablet prescription object

        Object name: synthroid

        Arguments: 
            commonName:     "levothyroxine"
            din:            "02172070"
            dosageAmount:   1
            dosageUnit:     "tablet"
            dosageFrequency:    "once per day"
            givenCost:      130.30
            tabletCount:    90

*/
let synthroid = new TabletPrescription(
    "levothyroxine",
    "02172070",
    1,
    "tablet",
    "once per day",
    130.30,
    90
);


/*  --- Exercise 3.2 --------------------------------------------------------------------------------

    Create a liquid prescription object

        Object name: furosemide

        Arguments: 
            commonName:     "furosemide"
            din:            "00565040"
            dosageAmount:   30
            dosageUnit:     "mg"
            dosageFrequency:    "twice per day"
            givenCost:      19.51
            volumeML:    10
            
*/

let furosemide = new LiquidPrescription(
    "furosemide",
    "00565040",
    30,
    "mg",
    "twice per day",
    19.51,
    10
);


/*  --- Exercise 4 --------------------------------------------------------------------------------

    For each object, get the following information by calling its properties / methods:
    1. common name
    2. type
    3. din
    4. complete instruction with dosage information
    5. cost
    6. - cost per tablet if the drug's type is tablet
       - cost per ML if the drug's type is liquid

    What are the properties / methods to be called? 
    Also submit a screenshot of the outputs. 
*/                                        

console.log(synthroid.commonName);
console.log(synthroid.getDin());
console.log(synthroid.type);
console.log(synthroid.getInstruction());
console.log(synthroid.getCostperTablet());


console.log(furosemide.commonName);
console.log(furosemide.type);
console.log(furosemide.getDin());
console.log(furosemide.getInstruction());
console.log(furosemide.getCostperMl());


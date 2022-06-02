function Car (Mmake, Mmodel, Myear){
    this.make =Mmake;
    this.model = Mmodel;
    this.year = Myear;
    this.getCarInfo = function(){
        document.write("marka" + this.make + "modeli" + this.model +  "gamsovhebis weli" + this.year);
    };
};
function Person(pname, page ) {
    this.name = pname;
        this.age = page;
       
       this.driveCar = function(car) {
            document.write ( this.name +" " + "ყავს მანქანა" +" "+ car.make+ " " + car.model+ " " + car.year);
        };
        this.displayInfo = function() {
            document.write( this.name + " არის "+ this.age + "წლის"+"<br>");
        }
    } 
    var tom = new Person("Tom", 24);
    var bill= new Person("Bill", 27);
    tom.displayInfo();
   

   

    var tesla = new Car ("Tesla", "S" ,"released in 2015");

    tom.driveCar(tesla);

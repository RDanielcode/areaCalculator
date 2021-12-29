const circle = document.getElementById("circle");
const square = document.getElementById("square");
const triangle = document.getElementById("triangle");
const rectangle = document.getElementById("rectangle");
const figureContainer = document.getElementById("figure");
const dataContainer = document.getElementById("data");

class Calculate {
    constructor(){
        this.starting();
        this.clickEvent();
    }
    
    starting(){
        this.elementCreated = this.elementCreated.bind(this);
        this.figures = {
            circle,
            square,
            triangle,
            rectangle
        } 
    }
    

    clickEvent(){

        circle.addEventListener("click",this.elementCreated)
        square.addEventListener("click",this.elementCreated)
        triangle.addEventListener("click",this.elementCreated)
        rectangle.addEventListener("click",this.elementCreated)

    }
    
    
    elementCreated (ev){
        const figureChosen = ev.target.dataset.form;
        console.log(figureChosen)

        figureContainer.innerHTML = `
            <div class="element__${figureChosen}" id="${figureChosen}2"></div>
            <p>${figureChosen}</p>
            `        
        this.getArea(figureChosen)
    }

    getArea(figure){
        console.log(figure)
    
        if(figure == 'circle'){
            dataContainer.innerHTML = `
                <input type="text" placeholder="insert radius in m2" class="info__circle" id="dataCircle"/>
                <button id="circleButton">press to get area</button>
            `
            const buttonCircle = document.getElementById("circleButton")
            const getResultCircle = buttonCircle.addEventListener("click", ()=>{
                const infoRadius = document.getElementById("dataCircle");
                const radius = parseInt(infoRadius.value);
                console.log(infoRadius.value)
                const areaCircle = 3.14 * radius * radius;
    
                dataContainer.innerHTML += `
                    <p>Area : ${areaCircle} m2</p>
                `
            })
        }

        if(figure == 'square'){
            dataContainer.innerHTML = `
                <input type="text" placeholder="insert side in m2" class="info__square" id="dataSquare"/>
                <button id="squareButton">press to get area</button>
                `
            const buttonSquare = document.getElementById("squareButton")
            const getResultSquare = buttonSquare.addEventListener("click", ()=>{
                const infoSide = document.getElementById("dataSquare");
                const side = parseInt(infoSide.value);
                console.log(infoSide.value)
                const areaSquare = side * side;
        
                 dataContainer.innerHTML += `
                    <p>Area : ${areaSquare} m2</p>
                `
                })
            }

        if(figure == 'triangle'){
            dataContainer.innerHTML = `
                <input type="text" placeholder="insert base in m2" class="info__triangle1"/ id="dataTriangle1">
                <input type="text" placeholder="insert height in m2" class="info__triangle2" id="dataTriangle2"/>
                <button id="triangleButton">press to get area</button>
                `
            const buttonTriangle = document.getElementById("triangleButton")
            const getResultTriangle = buttonTriangle.addEventListener("click", ()=>{
                const infoSide1 = document.getElementById("dataTriangle1");
                const infoSide2 = document.getElementById("dataTriangle2");
                const side1 = parseInt(infoSide1.value);
                const side2 = parseInt(infoSide2.value);
                console.log(infoSide1.value);
                console.log(infoSide2.value);
                const areaTriangle = (side1 * side2) / 2 ;
        
                dataContainer.innerHTML += `
                    <p>Area : ${areaTriangle} m2</p>
                `
                })
            }

        if(figure == 'rectangle'){
            dataContainer.innerHTML = `
                <input type="text" placeholder="insert side one in m2" class="info__rect1" id="dataRect1"/>
                <input type="text" placeholder="insert side two in m2" class="info__rect2" id="dataRect2"/>
                <button id="rectangleButton">press to get area</button>
                `
            const buttonRectangle = document.getElementById("rectangleButton")
            const getResultRectangle = buttonRectangle.addEventListener("click", ()=>{
                const infoRect1 = document.getElementById("dataRect1");
                const infoRect2 = document.getElementById("dataRect2");
                const rect1 = parseInt(infoRect1.value);
                const rect2 = parseInt(infoRect2.value);
                console.log(infoRect1.value);
                console.log(infoRect1.value);
                const areaRectangle = rect1 * rect2;
        
                dataContainer.innerHTML += `
                    <p> Area : ${areaRectangle} m2</p>
                `
                })
            }
    }

}

figureContainer.innerHTML= `<i><font color="white">choose any figure from the options<br>
(click inside the figure)</i>`

const startCalc = function (){
    
    const calc = new Calculate();
    
}




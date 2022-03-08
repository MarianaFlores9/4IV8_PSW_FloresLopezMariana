

const form = document.getElementById("interesForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
        if (form.valor.value>=  100000  &&  form.valor.value <= 1000000){                  
            if(form.CuotaI.value >= 0.10*form.valor.value){
                if (form.Periodo.value == 3 ||form.Periodo.value == 6 || form.Periodo.value == 9 || form.Periodo.value== 12 || form.Periodo.value== 18){
                    var x = parseInt(document.getElementById('valor').value);
                    var y = parseInt(document.getElementById('CuotaI').value);
                    var z = parseInt(document.getElementById('Periodo').value);
                    
                        document.getElementById('Capital').innerHTML = (x-y)*((1+0.0394)**z);
                           
                        var c = parseFloat(document.getElementById('Capital').innerHTML);
                        document.getElementById('Cuota').innerHTML = (c/z);
                let interesFormData = new FormData(form);
                let interesObj = convertFormDataToInteresObj(interesFormData)
                saveInteresObj(interesObj)
                insertRowInTabla_info(interesObj)
                form.reset();   
            }
                else{
                    alert("El periodo es solamente de 3, 6, 9, 12 ó 18 meses")
                    form.CuotaI.focus();
                    return false;
                }
            }
            else{
                alert("La cuota inicial tiene que ser minimo 10% del valor capital")
                form.CuotaI.focus();
                return false;
            }
        }
        else{
            alert("Estas ingresando un valor fuera del rango de $100,000.00 a $1,000,000.00")
            form.valor.focus();
            return false;
        }
    })

    document.addEventListener("DOMContentLoaded", function(event){
        let interesObjArr = JSON.parse(localStorage.getItem("interesData"))
        interesObjArr.forEach(
            function(arrayElement){
            insertRowInTabla_info(arrayElement)
            }
        )
    })
    function getNewInteresId(){
        let lastInteresId = localStorage.getItem("lastInteresId") || "-1";
        let newInteresId = JSON.parse(lastInteresId)+1;
        localStorage.setItem("lastInteresId", JSON.stringify(newInteresId))
        return newInteresId;
    }
            function convertFormDataToInteresObj(interesFormData){
                let valor = interesFormData.get("valor")
                let CuotaI =interesFormData.get("CuotaI")
                let Periodo = interesFormData.get("Periodo")
                let Interes = interesFormData.get("Interes")
                return {
                    "valor" : valor,
                    "CuotaI" : CuotaI,
                    "Periodo" : Periodo,
                    "Interes" : Interes
                }
            }
            function insertRowInTabla_info(interesObj){

                //aqui se jalan los datos de la operacion
                
                function calcular(){
                    var x = parseInt(document.getElementById('valor').value);
                    var y = parseInt(document.getElementById('CuotaI').value);
                    var z = parseInt(document.getElementById('Periodo').value);
                    document.getElementById('Capital').innerHTML = ((x-y)*(1+0.0394))*z;
                }


                let Tabla_infoRef = document.getElementById("Tabla_info");

                let newInteresRowRef = Tabla_infoRef.insertRow(-1);
                newInteresRowRef.setAttribute("data-interes-id", interesObj["interesId"])

                let newTypeCellRef =  newInteresRowRef.insertCell(0);
                newTypeCellRef.textContent =  "$" + interesObj["valor"];

                newTypeCellRef =  newInteresRowRef.insertCell(1);
                newTypeCellRef.textContent = "$" + interesObj["CuotaI"];

                newTypeCellRef =  newInteresRowRef.insertCell(2);
                newTypeCellRef.textContent = interesObj["Periodo"] +" meses";

                newTypeCellRef =  newInteresRowRef.insertCell(3);
                newTypeCellRef.textContent = "3.94%";

                let newDeleteCell = newInteresRowRef.insertCell(4);
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Eliminar";
                newDeleteCell.appendChild(deleteButton);

                deleteButton.addEventListener("click", (event) =>{
                let interesRow = event.target.parentNode.parentNode;
                let interesId = interesRow.getAttribute("data-interes-id");
                interesRow.remove();
                deleteInteresObj(interesId);
                })
            }
            //interesId que quiero eliminar
            function deleteInteresObj(interesId){
                let interesObjArr = JSON.parse(localStorage.getItem("interesData"));
                    //busco el indice o posicion del interes que quiero eliminar
                let interesIndexInArray = interesObjArr.findIndex(element => element.interesId === interesId)
                //Elimino el elemento de esa posicion
                interesObjArr.splice(interesIndexInArray, 1);
                //Convertir de objeto a json
                let interesArrayJSON = JSON.stringify(interesObjArr);
                //Guardo mi array de interes en forma json en el local storage
                localStorage.setItem("interesData", interesArrayJSON)
            }
                        
            function saveInteresObj(interesObj){
                let myInteresArray =JSON.parse(localStorage.getItem("interesData")) || [];
                myInteresArray.push(interesObj);
                let interesArrayJSON = JSON.stringify(myInteresArray);
                localStorage.setItem("interesData", interesArrayJSON)

                
    }
   
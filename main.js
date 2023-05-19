
let formControl = document.querySelector('.form-control')
formControl.addEventListener('submit', (e)=>{
    e.preventDefault();

    let year = Number(document.querySelector('.year').value);
    let month = Number(document.querySelector('.month').value);
    let day = Number(document.querySelector('.day').value);
    
    if(year!=""&&month!=""&&day!=""){
        let todaysDate= new Date()
        let usersDate = new Date(year,month-1,day)
        let maxDay = new Date(year,month,0)
        
        let outputYear = (todaysDate.getFullYear()-usersDate.getFullYear())
        let outputMonth = ((todaysDate.getMonth()-1)-usersDate.getMonth()+1)
        let outputDay = (todaysDate.getDate()-usersDate.getDate())

            if(day>maxDay.getDate()&&(month-1)>12&&year>todaysDate.getFullYear()){
                document.getElementById("dayError").innerHTML="Must be a valid Day"
                document.getElementById("dayError").style.display="block"
                document.getElementById("monthError").innerHTML="Must be a valid Month"
                document.getElementById("monthError").style.display="block"
                document.getElementById("yearError").innerHTML="Must be a valid Year"
                document.getElementById("yearError").style.display="block"
            }
            else{
                while(true){
                if(day>maxDay.getDate()){
                    document.getElementById("dayError").innerHTML="Must be a valid Date"
                    document.getElementById("dayError").style.display="block"
                    document.querySelectorAll('.label').forEach((el)=>{
                        el.style.color='hsl(0, 100%, 67%)'
                    })
                    for(let i=0; i<document.getElementsByTagName('input').length; i++){
                        document.getElementsByTagName('input')[i].style.border='1px solid hsl(0, 100%, 67%)'
                    }
                    break
                } 
                else if((month-1)>12){
                    document.getElementById("monthError").innerHTML=" "
                    document.getElementById("monthError").style.display="block"
                    break
                }
                
                else if(year>todaysDate.getFullYear()){
                    document.getElementById("yearError").innerHTML=" "
                    document.getElementById("yearError").style.display="block"
                    break
                }
                else{
                    document.querySelector(".years").innerHTML= outputYear;
                    document.querySelector(".months").innerHTML= outputMonth;
                    document.querySelector(".days").innerHTML= outputDay;
            
                    document.querySelectorAll('.label').forEach((el)=>{
                        el.style.color='initial'
                    })
                    document.querySelectorAll('.ErrorMessage').forEach((el)=>{
                        el.style.display="none"
                    })
                    break
                }
            }
            }
            
            
            
        }
    else{
        document.querySelectorAll('.label').forEach((el)=>{
            el.style.color='hsl(0, 100%, 67%)'
        })
        document.querySelectorAll('.ErrorMessage').forEach((el)=>{
            el.style.display="block"
        })
    }


})


let formControl = document.querySelector('.form-control')
formControl.addEventListener('submit', (e)=>{
    e.preventDefault();

    let year = Number(document.querySelector('.year').value);
    let month = Number(document.querySelector('.month').value);
    let day = Number(document.querySelector('.day').value);
    
    if(year!=""&&month!=""&&day!=""){
        let todaysDate= new Date()
        let usersDate = new Date(year,month+1,day)
        let maxDay = new Date(year,month,0)

        let outputYear = (todaysDate.getFullYear()-usersDate.getFullYear())
        let outputMonth = ((todaysDate.getMonth()+1)-usersDate.getMonth())
        let outputDay = (todaysDate.getDate()-usersDate.getDate())
    
        console.log(usersDate.getMonth()-1)
        console.log(day,maxDay.getDate())
        console.log(todaysDate.getFullYear())

        if(day>maxDay.getDate()){
            document.getElementById("dayError").innerHTML="Must be a valid Day"
            document.getElementById("dayError").style.display="block"
            
        } 
        if((month-1)>12){
            document.getElementById("monthError").innerHTML="Must be a valid Month"
            document.getElementById("monthError").style.display="block"
        }
           
        if(year>todaysDate.getFullYear()){
            document.getElementById("yearError").innerHTML="Must be a valid Year"
            document.getElementById("yearError").style.display="block"
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

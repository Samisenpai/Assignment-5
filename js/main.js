document.getElementById("button-1").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-1");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-1").style.backgroundColor = "gray";
        document.getElementById("button-1").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Fix Mobile Button Issue at ${time}`;
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});

document.getElementById("button-2").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-2");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-2").style.backgroundColor = "gray";
        document.getElementById("button-2").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Add Dark Mode at ${time}`;
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});

document.getElementById("button-3").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-3");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-3").style.backgroundColor = "gray";
        document.getElementById("button-3").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Optimize Home page  at ${time}`;
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});


document.getElementById("button-4").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-4");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-4").style.backgroundColor = "gray";
        document.getElementById("button-4").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Add new emoji at ${time}`;
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});

document.getElementById("button-5").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-5");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-5").style.backgroundColor = "gray";
        document.getElementById("button-5").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Integrate OpenAI API at ${time}`;
        
        
        
        logParent.appendChild(logChild);

        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});

document.getElementById("button-6").addEventListener('click', function(){
 
    
    let btn = document.getElementById("button-6");
    btn.Disabled;

    if(btn.Disabled = true){
        document.getElementById("button-6").style.backgroundColor = "gray";
        document.getElementById("button-6").style.pointerEvents = "none";
        
        alert("Board Updated Successfully");
        let assign = convertToNum("task-assign");
        let assignCount = assign - 1;
        document.getElementById("task-assign").innerText = assignCount;

        let doneTask = convertToNum("done-count");
        let doneCount = doneTask + 1;
        document.getElementById("done-count").innerText = doneCount;

        let logParent = document.getElementById("log-history");
        let logChild = document.createElement("p");
        logChild.classList.add("p-3","rounded-lg", "bg-slate-200", "mb-2", "log-child");
        logChild.innerText = `You have Complete The Task Improve Job searching at ${time}`;
        
        
        
        logParent.appendChild(logChild);

        if(assignCount <= 0){
            return alert("Congrats!!! You have completed all the Current Task");
        }
        
    }

    
    

    


    
});


// clear history logic 

document.getElementById("clear-btn").addEventListener("click", function(){
   document.getElementById("log-history").innerHTML = "";
    
});



// backround change 

document.getElementById("bg-changer").addEventListener("click", function(){
    let colors = ["#00FFFF", "#E0FFFF", "#FF7F50", "#5F9EA0", "#6495ED", "#DC143C", "#8A2BE2"];
    let randomColor = Math.floor(Math.random() * colors.length);
    document.getElementById("body").style.backgroundColor = colors[randomColor];
});


// discover section 
document.getElementById("discover").addEventListener("click", function(){
    window.location.href = "./answer.html";
});
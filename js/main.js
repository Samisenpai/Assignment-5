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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("yoo");
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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("yoo");
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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("yoo");
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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);
        if(assignCount <= 0){
            return alert("yoo");
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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);

        if(assignCount <= 0){
            return alert("yoo");
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
        logChild.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        
        
        
        logParent.appendChild(logChild);

        if(assignCount <= 0){
            return alert("yoo");
        }
        
    }

    
    

    


    
});


document.getElementById("clear-btn").addEventListener("click", function(){
   document.getElementById("log-history").innerHTML = "";
    
})







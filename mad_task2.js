var stu = { 
name: "David Rayy", 
sclass: "X", 
rollno: 12 
 }; 
console.log("Name: ", stu.name, "Roll No.: ", stu.rollno, "Class: ", stu.sclass);

var stu = { 
name: "David Rayy", 
sclass: "X", 
rollno: 12 
}; 
console.log(stu); 
delete stu.rollno; 
console.log(stu);

/* function sandwich_calculator(bread){  
       return (Math.floor(bread/2)+" Sandwiches can be made!");  
       }  
       console.log(sandwich_calculator(7)); */ 
 function sandwich_calculator(bread, cheese) { 
       var sandwiches = 0; 
          while (true) {
            if (bread >= 2) { 
               bread -= 2; 
               if (cheese >= 1) {
                  cheese -= 1 
                  sandwiches += 1; 
               }
               else { 
                  console.log(sandwiches + " Sandwiches can be made!"); 
    break; 
   } 
} 
else{ 
   console.log(sandwiches + " Sandwiches can be made!"); 
   break; 
} 
      } 
    } 
    sandwich_calculator(26, 12);



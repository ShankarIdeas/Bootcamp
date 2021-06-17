<code>
    Consider the below snippet:
  
    console.log("typeof(1)          ",typeof(1));
    
    console.log("typeof(1.1)        ",typeof(1.1));
    
    console.log("typeof('1.1')      ",typeof('1.1'));
    
    console.log("typeof(true)       ",typeof(true));
    
    console.log("typeof(null)       ",typeof(null));
    
    console.log("typeof(undefined)  ",typeof(undefined));
    
    console.log("typeof([])         ",typeof([]));
    
    console.log("typeof({})         ",typeof({}));
    
    console.log("typeof(NaN)        ",typeof(NaN));
  
  It gives the output as below:
</code>
<code>
  
  $ node "/home/shankar/Documents/HTML_CSS/Bootcamp/Day3/typeof.js"
  
  typeof(1)           number
  
  typeof(1.1)         number
  
  typeof('1.1')       string
  
  typeof(true)        boolean
  
  typeof(null)        object
  
  typeof(undefined)   undefined
  
  typeof([])          object
  
  typeof({})          object
  
  typeof(NaN)         number   
  
  $
</code>

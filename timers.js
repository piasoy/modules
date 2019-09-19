

var sayToc = setInterval(ticToc, 1000);

let tic = true

function ticToc(){   
    if (tic){        
        console.log('tic');
        tic = false
    }
    if (!tic){
        console.log('tock');
        tic = true
    }
}


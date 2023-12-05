// stands for Immediatly Invoked Function Expressions

(function chai(){
    //named iife
    console.log('IIFE')
})();

( () => {
    console.log('arrow IIFE');
}) ();

//pass parametrs to IIFE funcs
( (name) => {
    console.log(`name is: ${name}`)
} )('malik')
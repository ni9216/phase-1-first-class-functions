function receivesAFunction(callback){
callback();
}

receivesAFunction(() => console.log('callback function called'));



function returnsANamedFunction() {
    function namedFunction() {
        console.log('This is a named function.');
    }
    return namedFunction;
}
    const namedFunc = returnsANamedFunction();
    namedFunc();


    function returnsAnAnonymousFunction(){
        return function(){
            console.log('This is a anonynous function')
        };
    }

const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();


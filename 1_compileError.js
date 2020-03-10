function fooBar1()//Compiles
    {
        return {
            x: 0,
            y: 1
        };
    }
    function fooBar2()//Compiles
    {
        return {x: 0, y: 1};
    }
    function fooBar3()//Compiles
    {
        return
        {
            x: 0
        };
    }
    function fooBar4()//Does not compile
    {
        return
        {
            x: 0,
            y: 1//Uncaught SyntaxError: Unexpected token : 
        };
    }
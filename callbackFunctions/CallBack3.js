function operation(a,b,operation)
{
    log(operation(a,b))
}
    function sum(a,b)
    {
        log("Addition of two values" + a+b)
    }
    function mul(a,b)
    {
        log(a*b)
    }
operation(4,8,sum)
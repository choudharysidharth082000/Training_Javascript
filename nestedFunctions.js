//nested function example
const nestedFunctions = () =>
{
    const a = () =>
    {
        console.log('a');
    }
    const b = () =>
    {
        console.log('b');
    }
    const c = () =>
    {
        console.log('c');
    }
    return { a, b, c };
}
nestedFunctions().a();
nestedFunctions().b();
nestedFunctions().c();
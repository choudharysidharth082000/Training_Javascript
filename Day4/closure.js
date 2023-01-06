const sampleFunction = () =>
{
    var a =20;
    const inside=() =>
    {
        var b =20;
        console.log(a);
        return b;
    }
    console.log(inside());
}

sampleFunction();
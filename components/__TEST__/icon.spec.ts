test.each([
    [1,2 ,3 ]
])('should', (a, b, expected) => {
    //when
    function add(a:number,b:number){
        return a+ b
    }
    const result = add(a, b);

    //then
    expect(result).toBe(expected);
});

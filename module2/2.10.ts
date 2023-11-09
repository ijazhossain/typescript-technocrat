{
    // mapped types
    const arrOfNumbers: number[] = [1, 4, 5];
    const arrOfStrings: string[] = arrOfNumbers.map(number => number.toString());
    console.log(arrOfStrings);

    type AreaNumber = {
        width: number;
        height: number;
    }
    type Height = AreaNumber["height"]; // look up type
    // type AreaString = {
    //   height: string;
    //   width: string
    // }
    // keyof AreaNumber => "height"|"width"

    // T => {height:string;width:number}
    // key => T["width"]
    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area: AreaString<{ height: string, width: number }> = {
        height: "100",
        width: 5
    }




    // 
}
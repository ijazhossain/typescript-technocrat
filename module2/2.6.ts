{
    // constraints
    const addCourseToStudent = <
        T extends {
            id: number,
            name: string,
            email: string
        }
    >(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        };
    };

    const student3 = addCourseToStudent({
        id: 3,
        name: "Mr.Y",
        email: "z@gmail.com",
        emni: "emni",

    })
    const student1 = addCourseToStudent({
        id: 1,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    const student2 = addCourseToStudent({
        id: 2,
        name: "Mr. X",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });






























    // 
}
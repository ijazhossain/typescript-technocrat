{
    // interface - generic
    interface Developer<T, x = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: x;

    }
    interface EmilabWatch {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Persian",
        computer: {
            brand: "Asus",
            model: "X-255UR",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED",
        },
    };
    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface YahamaBike {
        model: string;
        engineCapacity: string;
    }
    const richDeveloper: Developer<AppleWatch, YahamaBike> = {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: "X-25UR",
            releaseYear: 2018,
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Something",
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "100cc",
        },
    };




















    // 
}